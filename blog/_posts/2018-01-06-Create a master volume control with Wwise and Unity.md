---
layout: 	blog_page
title:  	"Create a master volume controller with Wwise and Unity"
date:   	2018-01-06 10:00:00 +0100
category: 	blog
thumb: 		/assets/gamerella.png
excerpt: 	"This tutorial will show you how to create a master volume controller with Wwise and Unity. The volume will be changed with a RTPC so we can control it in Unity."
---

This tutorial will show you how to create a master volume controller with Wwise and Unity. The volume will be changed with a RTPC so we can control it in Unity.

First of all we need a Unity project that already has the Wwise integration. Then in the Wwise project we're going to create the RTPC that will control the volume, and a new sound to test it.

First we need to create the RTPC. We select the **Master Audio Bus** and then go to the RTPC tab and add a new RTPC by clicking the **>>** button and choosing **Bus Volume**.

<div class="onpage-screenshot">
	<img data-lity class="img-100" src="/assets/blog_master_volume/01_create_rtpc.png">
</div>

We can then click on the **>>** button on the left of our new RTPC to add a new **Game Parameter**.

<div class="onpage-screenshot">
	<img data-lity class="img-100" src="/assets/blog_master_volume/02_create_game_parameter.png">
</div>

Choose a name and the RTPC should appear. Then click on it to show the curve and select the left handle to change its value from 200 to 100.

<div class="onpage-screenshot">
	<img data-lity class="img-100" src="/assets/blog_master_volume/03_change_left_handle_value.png">
</div>

Now we can add a new sound to test our new RTPC. Right-click on the **Default Work Unit** and a new **Sound SFX** child

<div class="onpage-screenshot">
	<img data-lity class="img-100" src="/assets/blog_master_volume/04_create_new_sound_sfx.png">
</div>

Add a new source to our sound by clicking the **Add source button** and select **Wwise Tone Generator**.

<div class="onpage-screenshot">
	<img data-lity class="img-100" src="/assets/blog_master_volume/05_add_new_source.png">
</div>

We're now ready to test this sound in the soundcaster, to open it strike the **SHIFT + S** shortcut and create a new session by clicking the **>>** button and **New...** option.

<div class="onpage-screenshot">
	<img data-lity class="img-100" src="/assets/blog_master_volume/06_create_soundcaster_session.png">
</div>

Add a new sound to the soundcaster by dragging and dropping our sound in the Soundcaster windows, and click the **Show All** button on the right of the RTPCs label to show our **master_volume** parameter.

<div class="onpage-screenshot">
	<img data-lity class="img-100" src="/assets/blog_master_volume/07_add_new_sound_to_soundcaster.png">
</div>

In the end your soundcaster should look like that, and we can test our parameter directly by changing its value and playing our sound.

<div class="onpage-screenshot">
	<img data-lity class="img-100" src="/assets/blog_master_volume/08_final_soundcaster.png">
</div>

This is the line you'll need in Unity to change the RTPC value, where **master_volume** is the name of your RTPC and 100 the value you gave it. We didn't change the base range, so our RTPC can go from 0 to 100.

{% highlight csharp %}
AkSoundEngine.SetRTPCValue("master_volume", 100);
{% endhighlight %}

I hope that this short tutorial helps you, if you've any question don't hesitate to contact me :)