---
layout: 	project_page
title:  	"Smartland"
date:   	2017-09-12 18:30:00 +0100
category: 	personal-project
thumb: 		/assets/smartland/thumb.png

excerpt: |
  Smartland is an exhibition about a fictional city where everything is smart. It's using an AR mobile application to discover the place.

type: "Exhibition"
platforms: "iOS / Android"
inputs: "Smartphone"
tools: "Unity / Vuforia"

abstract: |
  Smartland is an exhibition about a fictional city where everything is smart. It's using an **AR mobile application** to discover the place, the visitor can scan stickers that are on the floor and the walls to discover videos about smart technologies and innovations.

tasks:
  - Setup Vuforia project
  - Scrap and play YouTube videos
  - Play videos stocked on Dropbox
  - Ship the application on the Google Play and Apple Store

screenshots: {}
---
I've worked on this project as a freelance.

My task was to create an application that was lightweight (the user has to download and install it at the beginning) but that can play 35 differents videos when scanning the matching sticker. It also needed to be usable on a large range of devices, so it musn't need a powerful CPU.

The trickiest part of the proect were :

- The YouTube scrapping part, because a part of the videos are stocked on this website. For the other videos they are on Dropbox and it's much easier to access, it doesn't need to scrap the website.
- The video player on mobile. I have first tried to use the new video player of Unity that was integrated in the 5.6 version, but it doesn't work on all the Android versions. So I've fallback to the Handheld.PlayFullScreenMovie method that work really well in the end.
- Get the application on the Apple Store. It has been a long journey with a few phone calls to get the app online, but I have learned a lot on the process and to always have some margin time because it takes a lot of time.

This project was really great to do because the client got some high requirements and it has been challenging to meet all of them. In the end the exhibition is running smoothly and the staff was satisfied of the official opening.