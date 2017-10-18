---
layout:     project_page
title:      "Deadly Riff reboot"
date:       2017-09-01 12:00:00 +0100
category: 	personal-project
thumb:      /assets/deadly_riff_reboot/thumb.png

excerpt:    "Rhythm versus fighting game made during the summer 2017."

type: "Rhythm versus fighting"
platforms: "AirConsole (web browser)"
inputs: "Smartphone"
tools: "Unity / AirConsole"

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
Editor On Fire is an open-source software used to create levels for the game "Frets On Fire", it's available on [Github](https://github.com/raynebc/editor-on-fire) under the BSD 3-clause license. Its project file format is available and to re-use it you need to read the file byte per byte and

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

How to get the bytes in a given range, I wanted to mimic the python list slice system.
{% highlight csharp %}
timingFormat = Convert.ToBoolean(file.Skip(20).Take(1).First());
{% endhighlight %}

Long note mechanic

new gameplay mechanics : Super attack, Solo, Attack that follow the beat