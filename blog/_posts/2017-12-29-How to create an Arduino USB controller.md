---
layout: 	blog_page
title:  	"Devblog : Atomic Lemon #1"
date:   	2017-11-23 22:00:00 +0100
category: 	blog
#thumb: 		/assets/gamerella.png
excerpt: 	"1st entry of my devblog on the project Atomic Lemon."
published:	false
---

<h2>End of year project</h2>
Atomic Lemon is my end of year project for my second and last year at the CNAM-ENJMIN school. We are a class of 56 students splitted in 6 fields : Sound design, visual design, UX design, management, game design and development.

During this year we've to create the vertical slice of a game in a team of 11 students, and the project that I've choosed to work on is : Atomic Lemon.

<h2>The game and my role in it</h2>
Atomic Lemon is a 3D sidescrolling beat'em'up where you play as Lemon a little girl from the favelas of Rio that want to defend her cultural street heritage from bad guys. She's helped by her friend, the graffiti of a sloth.

During this devblog I'll show our progression in the development of this game.

We've started this project one month ago and for the moment we're still in a stage of design, our game designers are thinking about the core mechanics of the game and the visual and sound designers are making concepts and the first assets of the game.

For my part I've been working on the implementation of the core mechanics in the game, and I've also take some time to learn how to use Unreal because the last time I've tried it it was in the UDK 3 version.

It was hard to totaly change my environment and lose the effiency that I've gained on Unity during the last year and a half, but it's worth the effort and I'm now used to the blueprint logic and possibilities and it's a pleasure to try a new mechanic.

<h2>What I've done so far</h2>

The first things I wanted to implement was the basis of the 3C (camera, control, character) to prototype quickly and show our designers and artists the possible camera angles we can imagine.

I then implemented the character movement (left, right and on depth), after that first prototype the designers choosed to lock the player on the Z axis, so there is no possibility to move in depth. And to add a little more fun to the movement I've added customizable dash so the designers can get a grip on how Unreal work, and what our workflow can be for the future.

## SCREENSHOT MOVE
## GIF MOVE

## SCREENSHOT DASH

With that in mind I've continued to work on Lemon's movement and added a custom jump thanks to the GDC video : ["Math for Game Programmers: Building a Better Jump
"](https://www.youtube.com/watch?v=hG9SzQxaCm8), and give the ability to my designers to create the jump curve they want by modifying existing points.

## SCREENSHOT JUMP CODE
## SCREENSHOT JUMP CURVE
## SCREENSHOT JUMP DEBUG IN EDITOR