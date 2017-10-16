---
layout:     project_page
title:      "Deadly Riff"
date:       2017-02-01 12:00:00 +0100
category: 	personal-project
thumb:      /assets/deadly_riff.png

excerpt: |
  Rhythm versus fighting game made for the AirConsole Contest 2017.

type: "Rhythm versus fighting"
platforms: "AirConsole (web browser)"
inputs: "Smartphone"
tools: "Unity / AirConsole"

abstract: |
  Deadly Riff is a **rhythm versus fighting game** made for the AirConsole Contest 2017.

banner: {"type": "image", "src": "/assets/deadly_riff/banner.png"}

team:
  - {"name": "Charlotte Couder", "role": "Game designer"}
  - {"name": "Alexandre Cornudet", "role": "Artist"}
  - {"name": "Antoine Wert", "role": "Sound designer"}
  - {"name": "Clément Rondeau", "role": "Developer"}

tasks:
  - Integration of AirConsole
  - Creation of an easy setup to playtest in real conditions
  - Sequencer that will launch the notes stored in a file, precisely and in synchronization with the music
  - Versus fighting mechanics
  - Animations integrations

screenshots: {"/assets/deadly_riff/1.png",
      			  "/assets/deadly_riff/2.png",
      			  "/assets/deadly_riff/3.png"}
---
Deadly Riff was my first big side-project with a real deadline, I've learned a lit about many subjects during this project.

First of all I had to create a game that was playable without any help, so it had to be intuitive and the screen flow needed to be complete (what I haven't done all the time in my previous game jams).

Secondly I had to integrate a lot of art and sound assets, so I've created reusable prefabs for SFX, music and character animators. A solid workflow was necessary and a good communication between us helped a lot.

Finally the project was ambitious and we got a good prototype at the end, sadly it wasn't as good as the other entries to the contest but we learned a lot and we wanted to continue this project later.

The task that gives me the most trouble was the Sequencer because it needed to be very precise and the level design file (JSON format) had a lot of notes in it. To avoid performance issues I've used Linq to search for notes that weren't already played or missed and that came in the next 2 seconds, with that trick I've been able to make this operation at each frame without any overhead.