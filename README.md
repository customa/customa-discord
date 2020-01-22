![Customa Logo](https://customa.gitlab.io/Customa-Misc/Logo/ProjectsLogos/Inline/PNG/Customa-Discord.png)

![Discord](https://img.shields.io/discord/476844593896226816?color=d81a60&logo=discord&logoColor=ffffff&style=for-the-badge)
![Pull Requests](https://img.shields.io/github/issues-pr/customa/customa-discord?color=d81a60&logo=github&style=for-the-badge)
![Stars](https://img.shields.io/github/stars/Customa/Customa-Discord?color=D81A60&style=for-the-badge)
![Pipeline](https://img.shields.io/gitlab/pipeline/Customa/Customa-Discord?color=D81A60&label=pipeline&style=for-the-badge)
![License](https://img.shields.io/github/license/Customa/Customa-Discord?color=D81A60&style=for-the-badge)

**The most customizable Discord theme out there**

Bold statement don't you think? Let me keep up with the statement from above...

* [1. The Backstory](#1-the-backstory)
* [2. Versions](#2-versions)
    * [Original - June 2017:](#original---june-2017)
    * [The First Rewrite - August 2017:](#the-first-rewrite---august-2017)
    * [The Second Rewrite ~ November 2017:](#the-second-rewrite--november-2017)
    * [The Third Rewrite / The [class*=]-Mess ~ January/February 2018:](#the-third-rewrite--the-class-mess--januaryfebruary-2018)
    * [The Fourth Rewrite / The Current Version - August 2018:](#the-fourth-rewrite--the-current-version---august-2018)
* [3. Installation](#3-installation)
    * [Introduction](#introduction)
    * [Powercord](#powercord)
    * [Manual](#manual)
    * [Cloning](#cloning)
    * [BetterDiscordv1](#betterdiscordv1)
* [4. Further Info](#4-further-info)
    * [Who is working on the theme?](#who-is-working-on-the-theme)
    * [What do I need for it to run?](#what-do-i-need-for-it-to-run)
    * [How does the module system work?](#how-does-the-module-system-work)
    * [Which variables do exist?](#which-variables-do-exist)
    * [Where does it run?](#where-does-it-run)
* [5. Special Mentions](#5-special-mentions)
* [6. Support/Community Discord](#6-supportcommunity-discord)

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

## 3. Installation

### Introduction

This part will be split in preparations for two different Discord injectors: Powercord and BetterDiscord.

**YOU DO NOT NEED THE CUSTOMA DEVELOPMENT INJECTOR FOR EITHER OF THEM**

Instead of one theme file that you just install and leave, Customa gives you the ability to chose by picking your own modules and setting variables. Both will be shown below:

* Picking Modules
For this the Import Feature of CSS is used:

```css
@import url("https://customa.gitlab.io/Customa-Discord/CATEGORY/MODULE");
```

**`CATEGORY:`** Represented through folders in this Git Repo<br>
**`MODULE:`** Represented through files in this Git Repo

* Changing Variables
For this the Root and Variable Feature of CSS is used:
```css
:root {
    --option: "setting";
    --colorOption: #123456;
}
```

You should end up with something like this:
```css
@import url("https://customa.gitlab.io/Customa-Discord/Base/base.m.css");

:root {
    --ColAppBG: #161621;
    --ColBackground1: #161621;
    --ColBackground2: #212126;
    ...
}
```

At this point the ways part for both (supported) injectors

### Powercord

*This is the prefered method of using Customa due to a better integration with the ecosystem from Customa's side.*

What you need:

* A CSS file (named Customa.css in the following paragraph)
* A powercord_manifest.json
* A folder in the themes folder of Powercord

#### Manual

Currently the recommended way of installing for Powercord:

You can ignore the .exists file:<br>
![Folder Setup](https://i.imgur.com/TxHtoeH.png)
![Folder Setup 2](https://i.imgur.com/UtGwXlP.png)

The powercord_manifest.json file:

```JSON
{
    "name": "Customa",
    "description": "The most customizable Discord theme",
    "version": "1.0.0",
    "author": "The Customa Project",
    "license": "GPL-3.0-only",
    "theme": "./Customa.css"
}
```

The Customa.css file:

```CSS
/* Your own Customa Setup here, Example below: */
@import url("https://customa.gitlab.io/Customa-Discord/Base/base.m.css");

:root {
    --ColAppBG: #161621;
    --ColBackground1: #161621;
    --ColBackground2: #212126;
    ...
}
```

#### Cloning

In this repository you can find a powercord_manifest.json file, which consists of a basic setup which executes the base module and nothing else. This also requires you to [clone](https://www.git-scm.com/docs/git-clone) the entire repo with git. This is the best fit if you are planning to contribute to Customa with own modules or bugfixes, which is greatly appreciated!

### BetterDiscordv1

*Supported but legacy way of using Customa.*

Go into the settings and navigate to the Custom CSS section. In there you place your Customa Configuration and Press Save and Apply.

## 4. Further Info

### Who is working on the theme?

Customa is built by a small team of three people, who all work their part on this theme! Several other people have also put time into the theme, as it is open source, improving it every step of the way.

### What do I need for it to run?

- A Discord Injector tool that injects CSS
- A config file (more info below)

### How does the module system work?

Despite a strict requirement for the Base Module on the old website, the theme can also be used without these modules, it is heavily recommended though. ~~Modules like the Settings and Variables Module cannot be used without the Root Module.~~ **Fixed with the newest rewrite**; It is also not tested if all the modules work/look properly without the Base Module or even with a completely different theme.

### Which variables do exist?

You either use the variables module, or look in the #modules channel in the Discord server.

### Where does it run?

On Discord's desktop app for PC, ie. Windows/Mac/Linux/etc., currently there are no plans for mobile versions. 

## 5. Special Mentions

The entire theme wouldn't have been possible without the help of all following people.

- The entire Rainmeter Discord, especially the following people:
    - zvava - For making me laugh at your dumb pull request messages and a ton of help on the theme...4 eyes see more then 2! <3
    - Eldog - Who's been supporting the theme since square 1 <3
    - Yemou - For working a lot on Customa's light theme support!
    - Chinakomba - Who's been helping a lot during the rewrite!
    - anf - Who fixed the naughtiest bug ever and helped me fix the following ones myself
    - Mafu - For helping me figure out the right license
- Powercord and its community
    - MrLars - For helping me with the injector tool used to create Customa, and pointing out a lot of bugs
    - Bowser65 - For helping me with getting the wrapperGuilds Module to work again
    - Justin - For providing a splendid snippet for the channel search bar
- BetterDiscord
- Beard's Material Theme and obviously Beard Design himself [Github](https://github.com/BeardDesign1), [Website](http://www.beard-design.com/) - same goes for [Nox](https://github.com/rauenzi/Nox)
- Twitch Icon: Icon made by [Pixel Perfect](https://icon54.com) from [flaticon](https://flaticon.com)

## 6. Support/Community Discord

[Join the Support Server](http://invite.gg/Customa)
