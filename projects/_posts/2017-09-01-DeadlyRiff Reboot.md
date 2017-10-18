---
layout:     project_page
title:      "Deadly Riff reboot"
date:       2017-09-01 12:00:00 +0100
category: 	personal-project
thumb:      /assets/deadly_riff_reboot/thumb.png

excerpt:    "Rhythm versus fighting game made during the summer 2017."

type: "Rhythm versus fighting"
platforms: "Windows"
inputs: "Gamepads"
tools: "Unity / Wwise"

abstract: |
  Deadly Riff is a **rhythm versus fighting game** made for the AirConsole Contest 2017. The result was a good prototype but we wanted to push the idea further and see what we can get after a summer.

banner: {"type": "image", "src": "/assets/deadly_riff_reboot/banner.png"}

team:
  - {"name": "Vincent LeMehautée", "role": "Project manager"}
  - {"name": "Charlotte Couder", "role": "Game designer"}
  - {"name": "Thaïs Arias", "role": "Game designer"}
  - {"name": "Alexandre Cornudet", "role": "Artist"}
  - {"name": "Noémie Szmrzsik-Cohard", "role": "Artist"}
  - {"name": "Yoann D'Orlandi", "role": "Artist"}
  - {"name": "Antoine Wert", "role": "Sound designer"}
  - {"name": "Thomas Fransisco", "role": "Developer"}
  - {"name": "Clément Rondeau", "role": "Developer"}

tasks:
  - Rework and refactoring of the old code
  - Parser for Editor On Fire's project files
  - Long notes mechanic
  - Stats system for the characters
  - New gameplay mechanics
  - Wwise integration

screenshots: {"/assets/deadly_riff_reboot/1.png",
              "/assets/deadly_riff_reboot/2.png",
              "/assets/deadly_riff_reboot/3.png",
              "/assets/deadly_riff_reboot/4.png",
              "/assets/deadly_riff_reboot/5.png",
              "/assets/deadly_riff_reboot/6.png",
              "/assets/deadly_riff_reboot/7.png",
              "/assets/deadly_riff_reboot/8.png"}
---
The goal of this project was to get a vertical slice from the previous prototype and under 2 months. The team grew to fit the new objectives, unfortunately at the end of the summer we only got a new prototype but with more content and mechanics. My tasks during the project were :

<h2>Level design tool</h2>
My first task on the project was to create a level design tool usable by our game designers. In order to gain some time on the project, I've searched for rhtythm game level design tool.

I've found "Editor On Fire" which is an open-source software used to create levels for the game "Frets On Fire", it's available on [Github](https://github.com/raynebc/editor-on-fire) under the BSD 3-clause license. Its project file format is available and need to be readen byte per byte. To do so I've read the file and put all bytes in an array.

To read it I wanted to mimic the python list slice system, thanks to Linq it was possible to user the Skip() and Take() method to just get the bytes I wanted.

{% highlight csharp %}
timingFormat = Convert.ToBoolean(file.Skip(20).Take(1).First());
{% endhighlight %}

Once I got the informations, I needed to convert them to a usable type, to do so I've created a simple utility class to convert bytes to a given type.

{% highlight csharp %}
public class EOFUtility {
  public static int bytesToInt32(byte[] bytes) {
      return BitConverter.ToInt32(bytes, 0);
  }
  public static int bytesToInt16(byte[] bytes) {
      return BitConverter.ToInt16(bytes, 0);
  }
  public static char bytesToChar(byte[] bytes) {
      return BitConverter.ToChar(bytes, 0);
  }
}
{% endhighlight %}

With that system and a documentation that I had to write for the game designers, we got a new level design tool. Much more convenient than a handwritten JSON file.

<h2>Game mechanics</h2>
The first mechanic that I wanted to add was the long note mechanic, the goal was to create notes that last and force the player to keep the button done while the note is played.

Thanks to the new tool, the level designers could create notes with a given length and with the parser I could get this data. To spawn a long note I spawn 3 objects, a head, a body and a tail. The head is a normal note that needs to be played, the tail wait the length time (500ms for example) before moving, and the body is an object between the head and the tail that is scaled on the Y axis to get the good size.

<div class="onpage-screenshot">
  <img data-lity src="/assets/deadly_riff_reboot/long_note.png">
</div>

An other mechanic that was fun to work on was the "Super attack" and "Solos" system. The idea is that an invisible bar is filling up when you attack, play a long streak or block damages. When this bar is full you can launch a super attack that cause a lot of damage and put the opponent in the "Rock or die" status.

When one player is in "Rock or die" the main song is paused and a solo is launched, the player musn't miss a note to succeed and reduce the inflicted damages. This mechanic required to use a timer that can be paused to know where we are in the main sond, and after a solo to start one measure back.

This was easily possible with Wwise, and the timer song was in the end given by the Wwise's API.