---
layout: 	project_page
title:  	"Globe Trotters"
date:   	2017-10-13 18:30:00 +0100
category: 	school-project
thumb: 		/assets/mondrian_tondrian/thumb.png

excerpt: |
  During the "Game in the city" seminar that lasted a week, we've created an interactive art installation based on a Mondrian's painting.

type: "Interactive installation"
platforms: "Windows / Android"
inputs: "Smartphone"
tools: "Unity / Wwise"

abstract: |
  Mondrian Tondrian is an **interactive art installation** made during the "Game in the city" seminar that lasted a week. We wanted to create an installation that generate a procedurally generated music when scanning the Mondrian's painting colored cells.

team:
  - {"name": "Solène Bontemps", "role": "Designer"}
  - {"name": "Yufeng Huang", "role": "Designer"}
  - {"name": "Thais Arias", "role": "Designer"}
  - {"name": "Lena Dobric", "role": "Designer"}
  - {"name": "Clémentine Soulard--Pignon", "role": "Designer"}
  - {"name": "Colette Paugame", "role": "Designer"}
  - {"name": "Tristan Pradens", "role": "Sound designer"}
  - {"name": "Yannis Attard", "role": "Developer"}
  - {"name": "Antoine Le Lay", "role": "Developer"}
  - {"name": "Fanny Prele", "role": "Developer"}
  - {"name": "Victor Gallet", "role": "Developer"}
  - {"name": "Clément Rondeau", "role": "Developer"}

tasks:
  - Color detection with the smartphone camera
  - Network between the smartphones and the laptop
  - Wwise integration
  - Website to show the project

screenshots: {"/assets/globe_trotters/7.jpg",
              "/assets/globe_trotters/2.jpg",
              "/assets/globe_trotters/4.jpg",
              "/assets/globe_trotters/5.jpg",
              "/assets/globe_trotters/6.jpg"}
---
The few constraints we got was to create an experience that doesn't require the user to look at a screen, and it must be created within a 100€ budget. The goal was to create **an experience that is based on the city of Angoulême**, and we picked a diversifier that was : "Artist that enter the public domain in 2015", and Mondrian was one of them.

Our main idea was to generate **a procedural music** during the experience, and we found the idea of walking on a famous painting funny. The possibility to use the colored cells as a way to trigger the music was interesting to us, and it turned the installation into a cooperative experience.

The main difficulty that we encountered was the budget and the limited time, we got only 3 days in the week to calculate the fabric size, buy it and set it up.

My tasks on this project were to create an Android application that detect the color with the camera and fire an event to a server when the color has changed. To detect the color I first sum up all the r,g,b of all pixels and then calculte the average color, I then change this color from RGB space to the HSV space. With the H value I was able to detect the main colors (blue, red, yellow) and by checking the V value I detect when we avec a black cell.

I also had to create a Windows application that act as a server and receive the smartphones events in order to launch events on the Wwise sound engine. All the smartphones and the computer were connected to a smartphone that acted as a router.