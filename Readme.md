# Customa

![Customa Logo](CustomaLogo.png)

**The most customizable Discord theme out there**<br/>
Bold statement don't you think? Let me keep up with the statement from above

### 1. The backstory:

I started working on a theme in June 2017, it started off as some test how easy it would be to work with Discord's CSS/HTML. I quickly found a style I liked and showed the theme to others, after quite some time I had a few people beta testing my theme. After a few weeks I realized that a distribution over Discord, just passing the theme.css file was just way too tedious. I started uploading the entire theme onto GitHub and just sent out a file linking to my repo. After rewriting the theme for a couple of times I realized that not all features are wanted by everyone, so I seperated some functionality into seperate css files -> Modules.

In about 1 year and 2 months I rewrote the entire theme 4 times.

### 2. Versions:

#### Original - June 2017:
The original version had little to no customizability and a horrible, horrible code design. I wrote it mostly for myself but created a style a lot of people liked, the main parts of the theme still look the same, but have been tweaked to look even better. Back when I first created the theme, I overwrote every class with some color of mine, which resulted in a very poor support for background images, someone asked me to create support for images which lead to:

#### The first rewrite - August 2017:
I played with the thought of adding more variables and background support for quite a while, but my code was a complete mess. I recreated the theme in just about a week and finally also had support for background images. I also tried to reuse certain elements in a better way and ended up with a very clean and fast theme. As the new school year started, Discord kept adding more and more obfuscated selectors, which made the theme break more and more after time. Because of the now starting school year I had no chance of spending the time in working on a fix (let alone did my messy code allow for any of that).

#### The second rewrite ~ November 2017:
Around that time I started writing on Discord Plugins as well, so I tried to combine both plugin and theme development into one, this was also the first version which used modules. From this version on the theme hasn't changed dramatically from either the inside or outside. The newest rewrite in fact is very close to this one, more to this later. But some poor development, little time and more obfuscation lead to me dropping the project yet again.

#### The third rewrite / The [class*=]-Mess ~ January/February 2018:
In the holiday season I rewrote the entire theme yet again, this time using [class*=] - Statements, making the theme 'Future'-proof. What I didn't know: The selector is slow...very slow. My theme sometimes needed MINUTES to start, some modules didn't load at all, random buttons got selected and in the end I couldn't read anything anymore as [class*='container'] doesn't tell you that much. The theme still works for the most part and is the last one which is still on GitHub to this day (currently in the master branch, but it will be moved to some 'legacy' branch later on). 

#### The fourth rewrite / The current version - August 2018:
More than a year after the original version was released I had to fix all the problems of the last version. With the release of scripts that update the obfuscation in your theme, I sat down and started writing yet another rewrite. This time with better variable names and a much, much better code layout. I finally got around creating a Discord Server where I can keep track of all the changes and I got myself to comment all of my code. Despite slowing down development drastically, it made code much more readable and futureproof, even if I personally lose interest in creating themes.

### 3. Info:

#### Who is working on the theme?
Currently I am the only person working on this project but I am thinking about moving to a project account to allow for better workflow. You are free to fork the project, work on your own version but I also accept pull requests as regularly as I can. Customa is for the Community, but also with the Community.

#### What do I need for it to run?
* Some Discord-CSS injection tool
* The Custom CSS Section of BetterDiscord or the possibility to load CSS Code in any other injector

#### How does the module system work?
Despite a strict requirement for the Base and Root Module on my website, the theme can also be used without these modules, it is heavily recommended though. Modules like the Settings and Variables Module cannot be used without the Root Module. It is also not tested if all the modules work/look properly without the Base Module or even with a completely different theme. 

#### Installation: 
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

After that just add the desidered folder name (Base/Canary/Chat/Emoji/Misc/Sidebar/Webkit).
**Attention: The LTS-Version uses lowercase folder names!**

Search in the folder for your desired module and add the following to the statement: filename.m.css

In the end your link should look something like this:
```CSS
@import url('https://raw.githack.com/Customa/Customa/master/Base/base.m.css');
```

#### Which variables do exist?
You either look up the Readme Files in the seperate folders or use the variables module.

#### Where does it run?
* Discord - Desktop App
* Apparently also on the web version, using CSS Injectors

### 4. Special mentions
All of this theme wouldn't have been possible without the help of all following people.

* The entire Rainmeter Discord, especially the following people:
    * zvava
    * Chinakomba
    * anf
    * Eldog
* BetterDiscord
* Beard's Material     

### 5. Current Progress

I created a point system for myself in order to keep track of which modules need more care or need some redo all together. An old, buggy module gets a 0 (also modules which I haven't looked at yet, but might actually work), a module which I started working on but is not quite ready yet gets a 0.5, a finished module gets a 1.

Currently the project has **22.5 points**

Possible are **27 points**

Detailed listing of the project status (eg.: where it falls short at the moment):
#### Base Package
* The Base Module is fully implemented (**1 point**)
* The Font Module is fully implemented (**1 point**)
* The Selection Module is fully implemented (**1 point**)
* The Settings Module is fully implemented (**1 point**)
* The Tooltip Module is fully implemented (**1 point**)
* The Updates Module is not yet implemented (**0 points**)
* The Variables Module is fully implemented (**1 point**)<br/>
= 6/7
#### Chat Package
* The Better Filetypes Module is fully implemented (**1 point**)
* The Channel Divider Module is fully implemented (**1 point**)
* The Channels Wrapper Module is fully implemented (**1 point**)
* The Code Block Languages Module is not yet implemented (**0 points**)
* The Display Channel Icons Module is fully implemented (**1 point**)
* The Dual Guilds Module is not yet fully implemented (**0.5 points**)
* The Guilds Wrapper Module is fully implemented (**1 point**)
* The New Divider Red Module is fully implemented (**1 point**)
* The New Edit Text Module is fully implemented (**1 point**)
* The New Edit Icon Module is not yet implemented (**0 points**)
* The White Theme Support Module is fully implemented (**1 point**)<br/>
= 8.5/11
#### Emoji Package
* The Jumbo Moji Module is fully implemented (**1 point**)
* The Blobs Replacement Module is not yet implemented (**0 points**)<br/>
= 1/2
#### Sidebar Package
* The New Playing MEssages Module is fully implemented (**1 point**)
* The New User Modal Module is fully implemented (**1 point**)
* The New User Popout Module is fully implemented (**1 point**)
* The Sidebar Modifier Module is fully implemented (**1 point**)
* The Status Circles Module is fully implemented (**1 point**)<br/>
= 5/5
#### Webkit Package
* The Advanced Scrollbar Module is fully implemented (**1 point**)
* The Placeholdler Remover Module is fully implemented (**1 point**)<br/>
= 2/2