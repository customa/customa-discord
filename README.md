# Customa
![Customa Logo](CustomaLogo.png)

**The most customizable Discord theme out there**<br/>
Bold statement don't you think? Let me keep up with the statement from above...

1. [The Backstory](#1-the-backstory)
2. [Versions](#2-versions)
   * [Original](#original---june-2017)
   * [The First Rewrite](#the-first-rewrite---august-2017)
   * [The Second Rewrite](#the-second-rewrite--november-2017)
   * [The Third Rewrite / The \[class*=\]-Mess](#the-third-rewrite--the-class-mess--januaryfebruary-2018)
   * [The Fourth Rewrite / The Current Version](#the-fourth-rewrite--the-current-version---august-2018)
3. [Info](#3-info)
   * [Who is working on the theme?](#who-is-working-on-the-theme)
   * [What do I need for it to run?](#what-do-i-need-for-it-to-run)
   * [How does the module system work?](#how-does-the-module-system-work)
   * [Installation](#installation)
   * [Which variables do exist?](#which-variables-do-exist)
   * [Where does it run?](#where-does-it-run)
4. [Special Mentions](#4-special-mentions)
5. [Current Progress](#5-current-progress)
   * [Base Package](#base-package)
   * [Chat Package](#chat-package)
   * [Emoji Package](#emoji-package)
   * [Sidebar Package](#sidebar-package)
   * [Webkit Package](#webkit-package)
6. [Support/Community Discord](#6-supportcommunity-discord)

## 1. The Backstory

I started working on a theme in June 2017, it started off as some test how easy it would be to work with Discord's CSS/HTML. I quickly found a style I liked and showed the theme to others, after quite some time I had a few people beta testing my theme. After a few weeks I realized that a distribution over Discord, just passing the theme.css file was just way too tedious. I started uploading the entire theme onto GitHub and just sent out a file linking to my repo. After rewriting the theme for a couple of times I realized that not all features are wanted by everyone, so I seperated some functionality into seperate css files -> Modules.

In about 1 year and 2 months I rewrote the entire theme 4 times.

## 2. Versions

### Original - June 2017:
The original version had little to no customizability and horrible, horrible code design. I wrote it mostly for myself but created a style a lot of people liked, the main parts of the theme still look the same, but have been tweaked to look even better. Back when I first created the theme, I overwrote every class with some color of mine, which resulted in a very poor support for background images, someone asked me to create support for images which lead to:

### The First Rewrite - August 2017:
I had been playing with the thought of adding more variables and background support for quite a while, but my code was a complete mess. I recreated the theme in just about a week and finally also had support for background images. I also tried to reuse certain elements in a better way and ended up with a very clean and fast theme. As the new school year started, Discord kept adding more and more obfuscated selectors, which made the theme break more and more after time. Because of the now starting school year I had no chance of spending the time in working on a fix (let alone did my messy code allow for any of that).

### The Second Rewrite ~ November 2017:
Around that time I started writing Discord Plugins as well, so I tried to combine both plugin and theme development into one, this was also the first version which used modules. From this version on the theme hasn't changed dramatically from neither the inside nor outside. The newest rewrite in fact is very close to this one, more to this later. But some poor development, little time and more obfuscation lead to me dropping the project yet again.

### The Third Rewrite / The [class*=]-Mess ~ January/February 2018:
In the holiday season I rewrote the entire theme yet again, this time using [class*=]-Statements, making the theme 'future'-proof. What I didn't know: The selector is slow - very slow. My theme sometimes needed minutes to start, some modules didn't load at all, random buttons got selected and in the end I couldn't read anything anymore as [class*='container'] doesn't tell you that much. The theme still works for the most part and is the last one which is still on GitHub to this day (legacy branch). 

### The Fourth Rewrite / The Current Version - August 2018:
More than a year after the original version was released I had to fix all the problems of the last version. With the release of scripts that update the obfuscated classnames in your theme according to the newest Discord update, I sat down and started yet another rewrite. This time with better variable names and a much, much better structure. I finally got around creating a Discord Server where I can keep track of all the changes and I got myself to comment all of my code, despite slowing down development drastically, it made code much more readable and futureproof, even if I personally lose interest in creating themes.

## 3. Info

### Who is working on the theme?
Customa is built by a team of 4-5 people, who all work their part on this theme!

### What do I need for it to run?
* Some Discord-CSS injection tool
* The Custom CSS Section of BetterDiscord or the possibility to load CSS Code in any other injector

### How does the module system work?
Despite a strict requirement for the Base Module on the old website, the theme can also be used without these modules, it is heavily recommended though. ~~Modules like the Settings and Variables Module cannot be used without the Root Module.~~ **Fixed with the newest rewrite**; It is also not tested if all the modules work/look properly without the Base Module or even with a completely different theme. 

### Installation
* For the theme creation, I can recommend the **[Customa Theme Generator](https://ghostlydilemma.github.io/Discord-Tools/?gen=customaGenerator)**, which can be found on my website. There you find a list of all current modules.

* The theme can be created by hand as well. For this just use one of the follow templates:

Current Branch: **Master**
```CSS
@import url('https://raw.githack.com/Customa/Customa/master/');
```

Long Term Support/Legacy Branch: **Legacy**
```CSS
@import url('https://raw.githack.com/Customa/Customa/legacy/');
```

After that just add the desidered folder name (Base/Canary/Chat/Emoji/Misc/Sidebar/Webkit). **Attention: The LTS-Version uses lowercase folder names!**

Search in the folder for your desired module and add the following to the statement: filename.m.css

In the end your link should look something like this:
```CSS
@import url('https://raw.githack.com/Customa/Customa/master/Base/base.m.css');
```

### Which variables do exist?
You either look up the README files in the seperate folders, use the variables module, or look in the #modules channel in the Discord server.

### Where does it run?
* Discord - Desktop App
* (Apparently Also...) Discord - Web App

## 4. Special Mentions
All of this theme wouldn't have been possible without the help of all following people.

* The entire Rainmeter Discord, especially the following people:
    * zvava - For making me laugh at your dumb pull request messages and a ton of help on the theme...4 eyes see more then 2! <3
    * Chinakomba - Who's been helping a lot during the rewrite!
    * anf - Who fixed the naughtiest bug ever and helped me fix the following ones myself
    * Eldog - Who's been supporting the theme since square 1 <3
    * Mafu - For helping me figure out the right license 
* BetterDiscord
* Beard's Material Theme and obviously Beard Design himself [Github](https://github.com/BeardDesign1), [Website](http://www.beard-design.com/)
* Twitch Icon: Icon made by [Pixel Perfect](https://icon54.com) from [flaticon](https://flaticon.com)

## 5. Roadmap

I created a scoring system for myself in order to keep track of which modules need more care or need some redo all together. An old, buggy module gets a 0 (also modules which I haven't looked at yet, but might actually work), a module which I started working on but is not quite ready yet gets a 0.5, a finished module gets a 1.

Currently the project has **34 points**

Possible are **34 points** (+1 if you count Dual Guilds)

Detailed listing of the project status:

### Base Package
* The Base Module is fully implemented (**1 point**)
* The Font Module is fully implemented (**1 point**)
* The Selection Module is fully implemented (**1 point**)
* The Settings Module is fully implemented (**1 point**)
* The Tooltip Module is fully implemented (**1 point**)
* The Variables Module is fully implemented (**1 point**)<br/>
= 6/6

### Chat Package
* The Better Blocked Messages Module is fully implemented (**1 point**)
* The Better Compact Mode Module is fully implemented (**1 point**)
* The Better Filetypes Module is fully implemented (**1 point**)
* The Cake OS Titlebar Module is fully implemented (**1 point**)
* The Channel Divider Module is fully implemented (**1 point**)
* The Channels Wrapper Module is fully implemented (**1 point**)
* The Code Block Languages Module is not yet implemented (**1 point**)
* The Display Channel Icons Module is fully implemented (**1 point**)
* The Guilds Wrapper Module is fully implemented (**1 point**)
* The New Divider Red Module is fully implemented (**1 point**)
* The New Edit Icon Module is not yet implemented (**1 points**)
* The New Edit Text Module is fully implemented (**1 point**)
* The New Message Text Module is fully implemented (**1 point**)
* The Old Channel Select Module is fully implemented (**1 point**)
* The Typing Indicator on Right Module is fully implemented (**1 point**)
* The White Theme Support Module is fully implemented (**1 point**)<br/>
= 16/16 (+0/1)

### Emoji Package
* The Jumbo Moji Module is fully implemented (**1 point**)
= 1/1

### Sidebar Package
* The New Playing Messages Module is fully implemented (**1 point**)
* The New User Modal Module is fully implemented (**1 point**)
* The New User Popout Module is fully implemented (**1 point**)
* The Sidebar Modifier Module is fully implemented (**1 point**)
* The Status Circles Module is fully implemented (**1 point**)<br/>
= 5/5

### Webkit Package
* The Advanced Scrollbar Module is fully implemented (**1 point**)
* The Placeholdler Remover Module is fully implemented (**1 point**)<br/>
= 2/2

### Misc Package (Others)
* All Modules Module is fully implemented (**1 point**)
* iOS Toggles Module is fully implemented (**1 point**)
* Rainbow Module is fully implemented (**1 point**)
* Settings Module is fully implemented (**1 point**)<br/>
= 4/4

### **Ideas for the future**
* More Modern Popups - for Server Information and Setting your Online Status
* The Blobs Replacement Module - Other plugins and themes currently do this
* Mascot Module - Either with Turtles or the Customa Logo
* Font Weight Module
* Removing the New Message Text Module and moving it into a variable
* Revive the Better Windows Topbar Module<br/>

### Removed Modules
* Dual Guilds Module

## 6. Support/Community Discord

[Join here!](http://discord.io/Customa)