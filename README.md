![Customa Logo](Customa.svg)

**The most customizable Discord theme out there**

Bold statement don't you think? Let me keep up with the statement from above...

1. [The Backstory](#1-the-backstory)
2. [Versions](#2-versions)
    - [Original](#original---june-2017)
    - [The First Rewrite](#the-first-rewrite---august-2017)
    - [The Second Rewrite](#the-second-rewrite--november-2017)
    - [The Third Rewrite / The \[class\*=\]-Mess](#the-third-rewrite--the-class-mess--januaryfebruary-2018)
    - [The Fourth Rewrite / The Current Version](#the-fourth-rewrite--the-current-version---august-2018)
3. [Info](#3-info)
    - [Who is working on the theme?](#who-is-working-on-the-theme)
    - [What do I need for it to run?](#what-do-i-need-for-it-to-run)
    - [How does the module system work?](#how-does-the-module-system-work)
    - [Installation](#installation)
    - [Which variables do exist?](#which-variables-do-exist)
    - [Where does it run?](#where-does-it-run)
4. [Special Mentions](#4-special-mentions)
5. [Support/Community Discord](#6-supportcommunity-discord)

## 1. The Backstory

I ([Ghostly.](https://github.com/ghostlydot/)) started working on a theme in June 2017. It started off as some test how easy it would be to work with Discord's CSS/HTML. I quickly found a style I liked and showed the theme to others, which resulted in a few people beta testing my theme. As more time passed I realized that a distribution using Discord, just passing the theme.css file, was just way too tedious. With a newly created Github account I started uploading the entire theme onto GitHub and just sent out a file linking to my repo. After rewriting the theme for a couple of times I realized that not all features are wanted by everyone, so I seperated some functionality into seperate css files -> Modules.

In about 1 year and 2 months I rewrote the entire theme 4 times until it has become the complete modular system it is today.

## 2. Versions

### Original - June 2017:

The original version had little to no customizability and horrible, horrible code design. I wrote it mostly for my own use but apparently created a style a lot of people liked. Until this day the main parts of the theme still look pretty much the same, but have been tweaked and updated to look even better (and work with the newest Discord versions).
Back when I first created the theme, I overwrote every class with fixed colors, which resulted in a very poor support for background images. As I was asked to add support for those (or even see-through to your desktop), I started to work on:

### The First Rewrite - August 2017:

I had been playing with the thought of adding variables and background support for quite a while, but as I didn't pay much attention to clean code design I ended up rewriting the whole theme. I recreated the theme in just about a week and finally also had support for background images. Another major requirement for the rewrite was to make the theme faster. I tried to reuse certain elements and ended up with a much cleaner code and a way faster theme. As the new school year started, Discord kept adding more and more obfuscated selectors, which made work on the theme harder and harder. Because of the now starting school year I had no chance of spending the time in working on a fix (let alone did my messy code allow for any of that).

### The Second Rewrite ~ November 2017:

Around that time I started writing Discord Plugins as well, so I tried to combine both plugin and theme development into one. Starting with this version Customa also featured modules. Since this version the theme hasn't changed dramatically from neither the looks nor the code. The newest rewrite in fact is very close to this one, more to this later. But some poor development, little time and more obfuscation lead to me dropping the project yet again.

### The Third Rewrite / The [class*=]-Mess ~ January/February 2018:

In the holiday season I rewrote the entire theme yet again, this time using [class*=]-Statements, making the theme 'future'-proof. What I didn't know: The selector is slow - very slow. My theme sometimes needed minutes to start, some modules didn't load at all, random buttons got selected and in the end I couldn't read anything anymore as [class*='container'] doesn't tell you that much. The theme still works for very basic parts and is the last one which is still publicly available on GitHub to this day (legacy branch).

### The Fourth Rewrite / The Current Version - August 2018:

More than a year after the original version was released I had to fix all the problems of the last version. With the release of scripts that update the obfuscated classnames in your theme according to the newest Discord update, I sat down and started yet another rewrite. This time with better variable names and a much, much better structure. I finally got around creating a Discord Server where I can keep track of all the changes and I got myself to comment all of my code, despite slowing down development drastically, it made the code much more readable and futureproof, even if I personally lose interest in creating themes.

## 3. Info

### Who is working on the theme?

Customa is built by a small team of three people, who all work their part on this theme! Several other people have also put time into the theme, as it is open source, improving it every step of the way.

### What do I need for it to run?

- A Discord Injector tool that injects CSS
- A config file (more info below)

### How does the module system work?

Despite a strict requirement for the Base Module on the old website, the theme can also be used without these modules, it is heavily recommended though. ~~Modules like the Settings and Variables Module cannot be used without the Root Module.~~ **Fixed with the newest rewrite**; It is also not tested if all the modules work/look properly without the Base Module or even with a completely different theme.

### Installation

Instead of one theme file that you just install and leave, Customa uses an imports-and-variables approach, to add modules you put imports at the top of your config; (you can use the [#modules](https://discord.gg/uERAfbP) channel in the Discord server as a reference!)
```css
@import url("https://customa.gitlab.io/Customa-Discord/CATAGORY/MODULE");
```

After you have your module 'installed', you can change it's corresponding settings;
```css
:root {
    --option: "setting";
    --anotherOption: #696969;
}
```

Then you should have something like;
```css
@import url("https://customa.gitlab.io/Customa-Discord/Base/base.m.css");

:root {
    --ColAppBG: #161621;
    --ColBackground1: #161621;
    --ColBackground2: #212126;
    ...
}
```

Then you can save your config as a CSS file and plug it into your CSS injector, powercord's theme location is `<install>/src/Powercord/plugins/pc-styleManager/themes/`, or put it into the custom CSS settings page in better discord. Now that you know how to make themes with Customa the possibilities are endless!

### Which variables do exist?

You either use the variables module, or look in the #modules channel in the Discord server.

### Where does it run?

On Discord's desktop app for pc, ie. windows/mac/linux/etc., currently there are no plans for mobile versions, 

## 4. Special Mentions

The entire theme wouldn't have been possible without the help of all following people.

- The entire Rainmeter Discord, especially the following people:
    - zvava - For making me laugh at your dumb pull request messages and a ton of help on the theme...4 eyes see more then 2! <3
    - Eldog - Who's been supporting the theme since square 1 <3
    - Yemou - For working a lot on Customa's light theme support!
    - Chinakomba - Who's been helping a lot during the rewrite!
    - anf - Who fixed the naughtiest bug ever and helped me fix the following ones myself
    - Mafu - For helping me figure out the right license
- Powercord and its community
- BetterDiscord
- Beard's Material Theme and obviously Beard Design himself [Github](https://github.com/BeardDesign1), [Website](http://www.beard-design.com/)
- Twitch Icon: Icon made by [Pixel Perfect](https://icon54.com) from [flaticon](https://flaticon.com)

## 5. Support/Community Discord

[discord.io/Customa](http://discord.io/Customa)
