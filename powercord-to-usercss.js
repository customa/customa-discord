const fs = require("fs").promises;
const path = require("path");
const fetch = require("node-fetch");

let config = {};
let porkord = {};

async function main() {
  try {
    porkord = JSON.parse(
      await fs.readFile(path.resolve(__dirname, "powercord_manifest.json"), {
        encoding: "utf8",
      })
    );
    console.log("Loaded powercord manifest.");
  } catch {
    console.log("No powercord manifest found.");
    return;
  }
  try {
    config = JSON.parse(
      await fs.readFile(path.resolve(__dirname, "powercord-to-usercss.json"), {
        encoding: "utf8",
      })
    );
    console.log("Loaded converter config.");
  } catch {
    console.log("No converter config found.");
  }
  let css = [];
  let advanced = [];
  let t = await convertPlugin(porkord, true);
  css.push(t.css);
  advanced.push(t.advanced);
  for (const plug of porkord.plugins) {
    const p = await convertPlugin(plug);
    css.push(p.css);
    advanced.push(p.advanced);
  }
  const result = `/* ==UserStyle==
@name 	${config.name ? config.name : porkord.name}
@description	${config.description ? config.description : porkord.description}
@version	${config.version ? config.version : porkord.version}
@namespace	${config.namespace ? config.namespace : porkord.author}
@author	${config.author ? config.author : porkord.author}
@license	${config.license ? config.license : porkord.license}
@preprocessor	uso
${advanced.join("\r\n")}
==/UserStyle== */
@-moz-document domain("discord.com"), domain("discordapp.com") {
${css.join("\r\n")}
}
`;
  const outPath = config.outPath
    ? config.outPath
    : path.resolve(__dirname, idFromString(porkord.name) + ".user.css");
  console.log(`Writing result to ${outPath}`);
  await fs.writeFile(outPath, result, {
    encoding: "utf8",
  });
}

main();

/**
 * Escapes css comments
 */
function escCss(css) {
  return css.replace(/\*\//g, "*\\/");
}

function idFromString(str) {
  return str.toLowerCase().replace(/\s/g, "");
}

/**
 * Downloads @imports and replaces them with code
 */
async function fetchImports(css) {
  const regex = /@import url\(['"]?(.*?)['"]?\);/gm;
  let m;

  while ((m = regex.exec(css)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    if (m[1]) {
      const oUrl = m[1];
      let url = oUrl;
      let localFile = false;
      let fetched = "";
      if (config.importReplaces) {
        for (const el of config.importReplaces) {
          const rgx = new RegExp(el.regex, "g");
          if (rgx.test(url)) {
            localFile = el.isLocalFile || false;
            url = url.replace(rgx, el.to);
            if (localFile) {
              url = path.resolve(__dirname, url);
            }
            break;
          }
        }
      }
      if (localFile)
        fetched = await fs.readFile(url, {
          encoding: "utf8",
        });
      else {
        fetched = await (await fetch(url)).text();
      }

      css = css.replace(
        new RegExp(
          `@import url\\(['"]?${oUrl.replace(/\//g, "\\/")}['"]?\\);`,
          "g"
        ),
        `\r\n${fetched}\r\n`
      );
      if (url !== oUrl) {
        console.log(
          `Import from ${oUrl} matched regex in config and was replaced with ${url}. Is from local file: ${
            localFile ? "yes" : "no"
          }`
        );
      } else console.log(`Import from ${url} loaded.`);
    }
  }
  if (/@import url\(.*?\)/.test(css)) {
    return await fetchImports(css);
  }
  return css;
}

/**
 * Returns first matched regex group
 */
function getFirstGroup(regex, flags, str) {
  let m;
  const rgx = new RegExp(regex, flags);
  while ((m = rgx.exec(str)) !== null) {
    if (m.index === rgx.lastIndex) {
      rgx.lastIndex++;
    }
    if (m[1]) return m[1];
  }
  return null;
}

/**
 * Creates dropdown to toggle plugin and calls convertOption for each plugin option.
 */
async function convertPlugin(plugin, enableByDefault) {
  console.log(`Converting plugin ${plugin.name}...`);
  let content = await fetchImports(
    await fs.readFile(path.resolve(__dirname, plugin.theme || plugin.file), {
      encoding: "utf8",
    })
  );
  const name = idFromString(plugin.name);
  let advanced = "";
  if (plugin.settings)
    for (const option of plugin.settings.options) {
      const res = await convertOption(option, content);
      content = res.css;
      advanced += `${res.advanced}\r\n`;
    }
  if (enableByDefault) {
    advanced = `@advanced dropdown enable-${name} "Enable ${plugin.name}" {
	enable-${name}-yes "Yes" <<<EOT ${content} EOT;
	enable-${name}-no "No" <<<EOT /*${name} disabled*/ EOT;
}
${advanced}
`;
  } else {
    advanced = `@advanced dropdown enable-${name} "Enable ${plugin.name}" {
	enable-${name}-no "No" <<<EOT /*${name} disabled*/ EOT;
	enable-${name}-yes "Yes" <<<EOT ${content} EOT;
}
${advanced}
`;
  }
  console.log(`Converted plugin ${plugin.name}.`);
  return { css: `/*[[enable-${name}]]*/`, advanced: escCss(advanced) };
}

/**
 * Creates @advanced entries for plugin option
 */
async function convertOption(option, css) {
  console.log(`Converting option ${option.name}...`);
  const rgx = new RegExp(`--${option.variable}: (.*?);`, "g");
  const defVal = getFirstGroup(`--${option.variable}: (.*?);`, "g", css);
  css = css.replace(rgx, `--${option.variable}: /*[[${option.variable}]]*/;`);
  switch (option.type) {
    case "color":
    case "color_alpha":
    case "background":
      const isColor =
        defVal[0] === "#" ||
        defVal.startsWith("rgba(") ||
        defVal.startsWith("argb(") ||
        defVal.startsWith("rgb(");
      const type = isColor ? "color" : "text";
      console.log(
        `Converted option ${option.name}. Type: ${type}, Variable: ${option.variable}, Default value: ${defVal}`
      );
      return {
        css,
        advanced: `@advanced ${type} ${option.variable} "${option.name}" "${defVal}"`,
      };
    case "text":
    case "string":
    case "font":
    case "number":
    case "url":
      console.log(
        `Converted option ${option.name}. Type: text, Variable: ${option.variable}, Default value: ${defVal}`
      );
      return {
        css,
        advanced: `@advanced text ${option.variable} "${option.name}" "${defVal}"`,
      };
    case "select":
      let atmp = "";
      let i = 0;
      for (const sel of option.options) {
        i++;
        if (sel.value === defVal) {
          atmp =
            `	${option.variable}-${i} "${sel.label}${
              sel.value === defVal ? "*" : ""
            }" <<<EOT ${sel.value} EOT;\r\n` + atmp;
        } else {
          atmp += `	${option.variable}-${i} "${sel.label}${
            sel.value === defVal ? "*" : ""
          }" <<<EOT ${sel.value} EOT;\r\n`;
        }
      }
      console.log(
        `Converted option ${option.name}. Type: dropdown, Variable: ${option.variable}, Default value: ${defVal}`
      );
      return {
        css,
        advanced: `@advanced dropdown ${option.variable} "${option.name}" {
				${atmp}
			}`,
      };
  }
}
