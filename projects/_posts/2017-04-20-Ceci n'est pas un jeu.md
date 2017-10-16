---
layout:     project_page
title:      "Crazy toy city"
date:       2017-04-20 12:00:00 +0100
category: 	personal-project
thumb:      /assets/ceci_n_est_pas_un_jeu/thumb.png

excerpt:    "Arcade party game where you must capture buildings by surrounding them with your car."

type: "Platformer action"
platforms: "Windows"
inputs: "Gamepad"
tools: "Unity"

abstract: |
  Crazy toy city is an **arcade party game** made for the Gamers Assembly 2017's game jam. The theme was : "City-game" and we got 48h.

team:
  - {"name": "Axy Struggle", "role": "Artist"}
  - {"name": "Sylvain Antoine", "role": "Artist"}
  - {"name": "Nicolas Delamare", "role": "Producer"}
  - {"name": "Clément Rondeau", "role": "Developer"}

tasks:
  - Car driving mechanic
  - Building capture system
  - 3D models integration

screenshots: {"/assets/ceci_n_est_pas_un_jeu/1.png", "/assets/ceci_n_est_pas_un_jeu/2.png", "/assets/ceci_n_est_pas_un_jeu/4.png"}
---


The main difficulty that I've encountered in this game was the capture system. To keep in memory the position that the player has been through, I've partitioned the world in a grid and I've saved the cells on which the player has driven.

In a big compound array I've stored the building GameObject and the cells around it, if a player's positions array contains all the cells around one building then he captures it.

Also, if a cell is going to be added to the player's positions array then we know that he looped and we can remove its path and check if he captures a building. 