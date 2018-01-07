---
layout: 	blog_page
title:  	"Black video at Linux startup on a D2500HN motherboard"
date:   	2018-01-01 22:00:00 +0100
category: 	blog
excerpt: 	"Fix an integrated video card driver error at Linux startup."
---

<h2>The context</h2>
To start the year I wanted to install a server so that I can work on my website from anywhere by SSH access, and store sensitive data on a RAID 1 setup so that I can react if one the HDD burn. Of course it doesn't protect against all the other case of data loss like fire or flood, but it's at least a beginning.

The server motherboard is a D2500HN from Intel, and it has an integrated video card. It sounds like an easy installation but nop, the video card drivers are supporting only Windows 7 32-bit and guess what ? It's the integrated video card, so no more screen for you after a step during the boot.

<h2>The fix</h2>
I've tried with a Debian ISO and an Ubuntu ISO, it's the same. I've then see that with the **nomodeset** kernel boot parameter, it tries to use the BIOS modes instead of the video drivers, but it doesn't work in our case. For the moment the only solution I've found is to blacklist the driver.

To do so, when your computer starts keep the SHIFT key hold until you enter the GRUB home screen, it can also be made by smashing the E key to directly go to the configuration screen.

Once there you can add a new kernel boot parameter. Edit the linux line, add **modprobe.blacklist=gma500_gfx** at end of line just after **ro**. And boot your system by pressing CTRL+X, it should be good now. But if you restart you'll have to do that again, so to make it permanent you can edit the file **/etc/default/grub** and add the command to the **GRUB_CMDLINE_LINUX_DEFAULT** parameter.

I hope it'll help you, and if you've any tips on how to handle this issue in a better way feel free to contact me :) 