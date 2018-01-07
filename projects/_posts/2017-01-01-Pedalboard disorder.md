---
layout: 	project_page
title:  	"Pedalboard disorder"
date:   	2016-12-06 23:04:47 +0100
category: 	personal-project
thumb: 		/assets/pedalboard_disorder/thumb.png

excerpt: 	"Game made during the Global game jam 2017."

type: "Audio puzzle"
platforms: "Windows"
inputs: "Mouse"
tools: "Unity / Wwise"

abstract: |
  Pedalboard disorder is a **2D puzzle game** mixing Audio and logical problems. It was made during the Global game jam at Angoulême (France). The theme was : "Waves" and we got 48h.

banner: {"type": "video", "src": "https://www.youtube.com/embed/vYMqoMhYupI"}

team:
  - {"name": "Anize Amestoy", "role": "Sound designer"}
  - {"name": "Jean Nicolas", "role": "Game designer"}
  - {"name": "Clément Rondeau", "role": "Developer"}

tasks:
  - Grid and inventory system
  - Wwise integration
  - Tool to create new type of block
  - UI design and implementation

screenshots: {"/assets/pedalboard_disorder/1.png", "/assets/pedalboard_disorder/2.png"}

project_url: "https://globalgamejam.org/2017/games/pedalboard-disorder"
---
This was the second time that I was using Wwise in a project. The main difficulty was to find a way to keep the main track and the solo track synchronised, for that we always play the solo track but we mute it. When the player press a play button we fade-in and fade-out at the end.

It was also one of the first time I was making a game heavily based on UI, it has been a really great experience and I learned a lot about Unity UI system.