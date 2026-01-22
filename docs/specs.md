introduction

misconceptions


Let's dispell some misconceptions on lossless audio



# Programs that can automatically detect lossy vs lossless

Don't let audiophile forums fool you, you can't simply run a piece of bloatware to tell you which of your FLAC files are fake.

These "tools" are neural networks trained on lossy spectrals (by users who clearly don't know the first thing about identifying lossless files)
or, they are doing something tangentially related to encoders, audio formats, cds or music then falsely claiming it as the reason your files are lossy.

Don't forget the audiophile buzz words, false promises and charging money for something that isn't possible.

I'll discuss three by name because they are/have been the most popular but don't get it twisted. NONE OF THEM WORK.

auCDtect: [Download link](https://codecpack.co/download/auCDtect-Task-Manager.html)

This is a neural network trained on MP3s. It will make a guess based on an algorithm which you can read about [here](https://web.archive.org/web/20150621093159/https://en.true-audio.com/Tau_Analyzer_-_Aucdtect_Algorithm_Details).

Since these are guesses, it frequently guesses wrong. It is therefore completely useless.

+ Adds an annoying "auCDtect.log/txt" or "Folder.auCDtect.txt" to the folder its ran in. (Yes, that's where they come from and yes you can delete them)

Audio Identifier: [Download link](https://codecpack.co/download/Audio-Identifier.html)

Another program that makes guesses on the "quality" of your files. It frequently guesses wrong so it's also useless.

It does display a mediainfo like output so technically it isn't completely useless like auCDtect, but it's not like it does that well either.

Fakin the Funk: [Download link](https://fakinthefunk.net/en/#download)

Makes guesses on the true bitrate of your files based on an algorithm (likely a neural network fed spectrals, the same as the others)

This is also frequently wrong, and is fundamentally wrong on their approach to (and ability to) determining the actual bitrate preset (128, 192, 320) used.

This software at least generates a spectrogram of the file in question before spitting in your face by claiming to know what real bitrate was used to encode it.


# I don't have to check my files, I ripped/bought them myself

Wrong, just because the file is distributed/obtained in lossless does not make it mastered losslessly.

Files sourced from physical media such as CDs, CD-ROMs, SACDs, DVDs, Bluray, USBs, DAT Tapes, Vinyl or Cassettes can be lossy.

Files purchased from WEB stores like Bandcamp, Booth, Beatport, Dizzylab or (properly) ripped from streaming platforms can be lossy.

You can skip checking your own files if you don't plan to share them somewhere that cares about identifying lossy mastering though.



# Files ripped from streaming sites can never be lossless

Let's make two distinctions first

When I say properly sourced I am referring to extracting then decrypting an audiostream not recording your soundcard.

Not all streaming platforms offer lossless streaming, and while some do I am not referring to those with AI-enhanced lossy -> lossless streams.

Files properly sourced from streaming platforms are typically identical (and not in the metaphorical sense) to files purchasable from a webstore like Bandcamp.

Files properly sourced from streaming platforms are typically identical (once padded to meet redbook audio standards) to files extracted from a CD/CDr.

The files you'd extract and decrypt from streaming are usually the "master files" the label sends off to everywhere digital, including the printing press.

This means when the CD is lossy mastered usually the deezer/tidal/qobuz/apple/amazon etc sourced rip is also lossy mastered.

An artist/label may choose to use two different masters (think radio edit vs extended mixes) but this doesn't normally affect the lossy/lossless mastering.

# AI-enhanced lossless streaming (NetEase, QQMusic) / MQA (Tidal)

# Lossy sampling vs lossy mastering



OK, so we can't use a tool to automatically determine lossy vs lossless mastering, what can we do?

Well, in short the only real way is to generate and analyze a spectral image of the audio file(s) you're trying to identify as lossless.

There can be signs of foul play which I will discuss briefly, but you shouldn't rely only on this to make a determination.

# Checking metadata for suspicious tags

Open up the files in a tag editor or music player of your choice, then take a look at the tags found on your files.

Your COMMENT, COPYRIGHT or potentially a custom extended tag may have a value present that challenges its authenticity of being a lossless file.

If your files contain strings such as 'YOUTUBE to MP3 DOWNLOAD TOOL NAME' or 'encoded by LOSSY ENCODER NAME' or these can be clear indicators of a bad transcode.

There are also tools that claim to download from streaming sites that have actual lossless streaming but instead just record your soundcard during playback.

Some will add advertising to your files in the same locations, but once again there's just too many to list. Google the name of a tool if you aren't familiar with what it does.

MQA files also have <mqa syncwords> which are present in your files (or at least can be) which you can find using the script mqaid

jump here (FIX ME FIX ME FIX ME) for a guide on MQA and how to run mqaid


You can also try to make an educated guess based on the information available to you such as the folder name, extra files (scans, log, cue, bonus tracks), track list and more.

If for example you source a rip from somewhere and see 'CD FLAC' mentioned in the folder name but upon inspection you see that its not 16/44.1 (CDs can't be anything else) this would indicate it as being tampered with, incorrectly ripped or just not a CD. This sort of investigative work should only really be done once you've identified something as lossy and you need to now figure out if the rip is lossy because it's lossy mastered or lossy because somebody performed a bad transcode before re-sharing it.

The easiest way to do this would be to source content yourself, if not then from a reputable source that you trust. Sourcing from random blogs, discord servers, p2p, 4chan share threads or the less popular/more public music trackers runs higher risk of bad files. 

If you want to sus out the source of something, see my guide here (if i actually write it haha)


We will now go over how to generate a spectral image as we will need to do this to make a determination on whether the associated file is or isn't lossy

# Generating spectrals

Because you will be generating and looking at roughly 24 spectrals per album it is recommended that you pick software that can be easily scripted but,

as long as you can output a (readable!) full spectrogram and a zoom-in of a second or two of audio from a given track the software you choose does not matter.

It is HIGHLY recommended that you use [SoX](https://sourceforge.net/projects/sox/files/sox/) as it achieves all three of these goals.
*Windows users should use [sox_ng](https://codeberg.org/sox_ng/sox_ng/releases) specifically, due to it being patched to handle unicode which the windows binary cannot do.

It is HIGHLY recommended that you abandon [spek](http://spek.cc/) for spectral analysis even if it is "easy" to use. It's ease of use can be replicated by SoX, don't worry.


How to generate spectrals with...

SoX

Setup & Installation (windows):

Go to https://codeberg.org/sox_ng/sox_ng/releases then grab the latest stable release applicable for your OS, at time of writing that would be sox_ng-14.6.1.2

Extract the sox_ng.exe from the .zip archive provided. Then, move sox_ng.exe to a folder that is included in your PATH, this will allow you to call it from anywhere.

To add a folder to your PATH on windows you'd want to open the start menu, then search for "Edit Environmental Variables for your account"

rehost image https://i.imgur.com/iPn98d6.png

from here, click on the "PATH' field and then click "Edit"

rehost image https://i.imgur.com/969Wc7n.png

from here, you can either edit an existing variable by clicking it and choosing "Edit", or you can click on "New" to create a new variable.

You can add a folder where you keep your scripts/exes to your PATH, for example **C:\users\sharky\Documents\Scripts**, 

You can then place **sox_ng.exe** into this folder, along with any other scripts you want to be able to call from anywhere.

To confirm you've done this right. Open CMD or Powershell anywhere, then type "sox_ng", this should spit out a bunch of info

rehost image https://i.imgur.com/QLcvU3j.png

Generating spectrals

Manually (not recommended)

Most likely, if you are manually generating spectrals it's because you need to change the timing of the zoom to capture a specific section of the track.

Full spectral image: sox_ng "*.flac" -n remix 1 spectrogram -x 3000 -y 513 -z 120 -w Kaiser -o "spectrogram-full.png"

Zoomed in spectral image: sox_ng "*.flac" -n remix 1 spectrogram -X 500 -y 1025 -z 120 -w Kaiser -S 1:00 -d 0:02 -o "spectrogram-zoom.png"

If you're just here to change where the zoom takes place, adjust the -S **1:00** -d 0:02 value, changing that to your MM:SS of choice.

For generating a test spectral you would do the following:

Open Command Prompt or PowerShell in the folder by typing "cmd" into the header bar or by shift + right clicking in the folder

Type out sox_ng "NAME OF YOUR FILE.flac" -n remix 1 spectrogram -o "test.png"

This will output a basic spectrogram for a single file. You can expand on this by changing the size and orientation of the spectrogram using flags.


Drag & Drop a folder to create spectrals (using a .bat script)

Open a text editor of your choice, such as notepad++ then paste in 

[code]
cd %~dp0
mkdir Spectrograms
FOR %%A IN (%*) DO sox_ng %%A -n remix 1 spectrogram -x 3000 -y 513 -z 120 -w Kaiser -o "Spectrograms\%%~nxA-full.png"
FOR %%A IN (%*) DO sox_ng %%A -n remix 1 spectrogram -X 500 -y 1025 -z 120 -w Kaiser -S 1:00 -d 0:02 -o "Spectrograms\%%~nxA-zoom.png"
pause[/code]

then save this file with the extension .bat, you can name it something like **spectrals.bat**

You'll want to place this .bat file in the same folder as sox_ng.exe

Now, you can drag and drop a folder onto this .bat file to start a process that creates a subdirectory within that folder called Spectrograms, then it generates spectrals within that folder naming them the filename + the word full or zoom, full referring to the complete spectral image and zoom being a portion of the track.

Note: Because of how the zoom is generated, if a song is less than 1:02 minutes long it just won't work. **-S 1:00 -d 0:02** is indicating that it is going to slice two seconds of spectrogram from 1 minute into the song. You can change this as needed.


Using the <Run Service> tool in foobar2000 to call a bat script that generates spectrals

in foobar2000, in the top left corner click on **File** then **Preferences** then **Tools** then **Run services**

from here, click on **Add** in the top right of this UI then you'll want to add a label (name of the commmand) such as **Generate Spectrals**

next (FIX ME FIX ME FIX ME)





Audacity (credit to newstarshipsmell for the guide)

Setup & Installation:

Go to https://www.audacityteam.org/download/windows/ (there's a Mac version too which can be installed in the habitual OSX way by unpacking and dropping into Applications. Set up is about the same regarding parameters and values)

Download the installer (this guide is written for Audacity 3.4.2 installer but should be suitable for other versions)

Install or unpack Audacity to the desired location.

Of the audio filetypes allowed on Redacted, only FLAC and MP3 are natively supported by Audacity. To add support for AAC, AC3 and DTS files, you must also install the FFmpeg library. Follow the instructions here to download and install it:
https://manual.audacityteam.org/man/faq_installation_and_plug_ins.html#ffdown

Once you've installed both Audacity and the FFmpeg library, launch Audacity.

Open the preferences. Click **Edit**, then **Preferences...** (Or press **Ctrl+P**):

rehost image https://ptpimg.me/xrhc4o.jpg

In the treebar on the left, click **Tracks**.

Check the box "**Auto-fit track height**"
Change the **Default View Mode** dropdown from **Waveform** to **Spectrogram**.

rehost image https://ptpimg.me/969y73.jpg

In the treebar on the left, click **Tracks Behaviors**.

Check the box "**Select all audio, if selection required**"

rehost image https://ptpimg.me/2nn744.jpg

In the treebar on the left, click **Spectrograms**.

Change the options on this screen to the following:
Scale: Linear
Minimum Frequency: 0
Maximum Frequency: 23000
Gain: 20
Range: 130.
Frequency gain: 0
Algorithm: Frequencies
Window size: 1024
Window type: Blackman-Harris
Zero padding factor: 1

rehost image https://ptpimg.me/5z7tqe.jpg

In the treebar on the left, click **Libraries**.

If under "FFmpeg Library Import/Export" you do not see "FFmpeg Library Version: FFmpeg library not found" but some version numbers instead, then you should be done setting up Audacity. Click OK to save/close the Preferences window.

rehost image https://ptpimg.me/x08ggh.jpg

Otherwise, if you see this:

rehost image https://ptpimg.me/8u57l5.png

Then click the **Locate...** button next to "FFmpeg Library."

Hopefully you'll get a popup message of "Success - Audacity has successfully detected valid FFmpeg libraries..." in which case, click No.

rehost image https://ptpimg.me/hka650.png

Otherwise, click **Browse...**, navigate to the folder where you installed FFmpeg for Audacity.

rehost image https://ptpimg.me/0ih8h9.png

Select the avformat-55.dll file, then click Open, and click OK.

rehost image https://ptpimg.me/28p566.png

You should be done setting up Audacity. Click **OK** to save/close the Preferences window.



Generating a spectral:


NOTE: This walks you through taking a screenshot of the spectrals as well as making them, you don't have to take screenshots of your spectrals.

Launch Audacity. In OSX it's very much the same. You may need to use CMD+Shift+4 to select the screen area you want to capture, the result will appear as a .png file in your desktop.

Click **File** and **Open...** - do not drag/drop the files onto Audacity, and do not use **File > Import > Audio...**, as both of these will cause all the tracks to open in one window. File/Open opens them each in a separate window, so they properly fill the window.

In the popup window, navigate to the folder where the audio files are located, and select them all, then click **Open**.

rehost image https://ptpimg.me/xbwmz5.jpg

If you did not change the **Default View Mode** setting from **Waveform** to **Spectrogram** in the setup, then it will display the waveform. Switch to the spectrogram by clicking the down-arrow in the upper left corner next to the file name, and select **Spectrogram** from the drop-down menu.

rehost image https://ptpimg.me/m6uw5z.png

Move the mouse between the top and bottom channels, and hold the button down as you drag it all the way to the bottom, then release it.

rehost image https://ptpimg.me/o0k44d.jpg

Click **Select**, then **All** (or **CTRL + A**)

rehost image https://ptpimg.me/5fdxis.jpg

Take a screenshot of this view. Click **Tools** and then **Screenshot...**

rehost image https://ptpimg.me/bpioh5.jpg

On the **Screen Capture Frame** window, change the "Save images to" field to wherever you want to save them, then click **Capture Window Only**. Make sure the Screen Capture Frame pop-up is not in front of the spectrogram you wish to capture, and that the Audacity window is in the forefront.

rehost image https://ptpimg.me/61cm4z.jpg

If Audacity does not generate proper screenshots for some reason, use a third-party program for screen captures (e.g. [Microsoft's Snipping Tool](https://support.microsoft.com/en-gb/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b) is now part of supported Windows OS), or press **Alt+PrtScn** to copy the focused window to the clipboard, and paste the clipboard into Paint and save. Always save images as PNGs (which are lossless images) rather than JPGs (which are lossy.)

Now select a position to zoom in on. Click and hold down at the beginning position, and then drag the mouse right until you've selected roughly two seconds of audio - look at the **Selection Toolbar** below the spectrogram, and look at the times specified.

Alternatively, you can click once at the beginning of the passage, then click on the cog beneath the **Selection Toolbar**, and select **Start and Length of Selection**.

rehost image https://ptpimg.me/0dc04p.jpg

In the lowest timestamp field, enter '2.000' (two seconds), then press **Enter**.

rehost image https://ptpimg.me/pupa42.jpg

Once you've selected the portion to zoom in on, click **View** > **Zoom** > **Zoom to Selection** (or press **Ctrl+E.**)

rehost image https://ptpimg.me/j2v1l0.jpg

Once you've zoomed in, click **Select** > **None** (or press **Ctrl+Shift+A.**)

Using the same method as before, take another screenshot of this zoomed view.

rehost image https://ptpimg.me/6aga47.jpg

If you wish to also include a Frequency Analysis plot, with the zoomed view in Audacity re-select the zoomed portion by clicking **Select**, then **All** (or **CTRL + A**). Click **Analyze** and **Plot Spectrum...**

rehost image https://ptpimg.me/428i06.jpg

Using the same method as before take another screenshot, of the plot. Then click **Close**.

rehost image https://ptpimg.me/04o4be.jpg

You're done. Click **File** and **Close**, and click **No** on the save prompt.

Continue with the rest of the tracks until you're finished with the release.


Audition (credit to newstarshipsmell for the guide)

Adobe Audition is not free, so you must either use the trial version, pay for a license, or find a cracked copy to install. The trial and paid versions can be downloaded here: https://www.adobe.com/products/audition.html

Installing the cracked version can be rather challenging if you are unused to installing cracked software with complicated installation/cracking procedures. Make sure you carefully follow the installation instructions included with the cracked software.

Once you've installed Audition, go ahead and launch it. The example screenshots and instructions below pertain to Audition CC 2015.0, but should generally be applicable/similar to other versions. As a matter of fact the OSX version looks very alike.

When Audition first loads, it should look something like this:

rehost image https://ptpimg.me/82hkuv.png

We want the spectrogram to take up as much space as possible, and most of the displayed items are irrelevant, so click on the ≡ button next to the panel name on the tab on each unwanted panel and click on **Close Panel**. Remove all the panels with red highlights (Files, Favorites, Media Browser, Effects Rack, Markers, History, Video, Mixer and Levels). Do not close the Editor or Selection/View panels.

rehost image https://ptpimg.me/5bwfv7.png

It should now look like this:

rehost image https://ptpimg.me/4183da.png

Click on **View** and click on **Show Editor Panel Controls** to remove it.

rehost image https://ptpimg.me/t2qlv1.png

Click on **Window** and click on **Tools** to remove it. Click Windows again and click on **Zoom** to add it.

rehost image https://ptpimg.me/8pbr19.png

It should now look like this:

rehost image https://ptpimg.me/6bc461.png

Now click and hold down the left mouse button on the tabs for the **Selection/View*** and **Zoom** panels and drag them above the **Properties** panel:

rehost image https://ptpimg.me/ft4j89.png

rehost image https://ptpimg.me/4gskla.png

It should now look like this:

rehost image https://ptpimg.me/4123x4.png

Move the mouse over the panel borders and click/hold to drag them around to reposition them, like this:

rehost image https://ptpimg.me/z216n5.png

Click on **Window** and click on **Frequency Analysis**.

rehost image https://ptpimg.me/696n13.png

Click/hold the left mouse button and drag the Frequency Analysis panel onto the same row as the **Editor**, then release it:

rehost image https://ptpimg.me/119ko8.png

Then close the Frequency Analysis panel:

rehost image https://ptpimg.me/8vmkbc.png

Click on **Edit, Preferences** and **Spectral Displays**.

rehost image https://ptpimg.me/r4q0u1.png

Select the following settings:
Windowing Function: Blackman-Harris
Spectral Resolution: 1024
Decibel Range: between 160 and 180
Show gridlines: unchecked

rehost image https://ptpimg.me/yrsc33.png

Press **OK**. Drag/drop an audio file onto Audition. You'll probably see something like this:

rehost image https://ptpimg.me/6yr0l7.png

Click on **View** and click on **Show Spectral Frequency Display**. You can toggle between the spectrogram and waveform views with **Ctrl+D**.

rehost image https://ptpimg.me/v1juhf.png

You should see something like this:

rehost image https://ptpimg.me/6963k1.png

Click on **View** and **Show HUD** to hide it.

rehost image https://ptpimg.me/bw58ad.png

If the spectral view displays a second pair of waveforms above the spectrograms, below the thin waveforms on top, click on and drag the divider up until they're hidden.

rehost image https://ptpimg.me/542e3w.png

Right-click the frequency scale on the right side of the screen, and click on **Full Linear** if it is not greyed out (if it is, just click outside the menu.) Make sure that Hertz is selected rather than **Notes**.

rehost image https://ptpimg.me/6jrs8h.png

Right-click the time scale above the spectrogram, and click on **Time Display** and on **Decimal** (**mm:ss.ddd**)

rehost image https://ptpimg.me/7e9vp8.png

You should be done setting up Audition. Go ahead and close the file without saving it.



Generating spectrals:

Launch Audition.

In Explorer, select the file(s) you wish to examine and/or generate spectrograms for. Drag/drop them into Audition, and wait for them to finish loading.

Click **Edit** and **Extract Channels to Mono Files**.

rehost image https://ptpimg.me/44n1o0.png

Take a screenshot of this window - either use a third-party program, or press **Alt+PrtScrn** to copy the window to your clipboard, and paste your clipboard into Paint and save. Always save images as PNGs (which are lossless images) rather than JPGs (which are lossy.)

Now select a position to zoom in on. Click and hold down at the beginning position, and then drag the mouse right until you've selected roughly two seconds of audio - look at the **Selection/View** panel in the upper left, and look at the **Duration** time below **Selection**.

Alternatively, you can click once at the beginning of the passage, then click on the **Duration** time below **Selection** in the **Selection/View** panel to edit it, press **2** and then **Enter**. This will select exactly two seconds.

Once you've selected the portion to zoom in on, in the *Zoom* panel click on the *Zoom To Selection* button.

rehost image https://ptpimg.me/17wrj4.png

Once you've zoomed in, click on **Edit, Select** and **Deselect All**.

rehost image https://ptpimg.me/skxo6p.png

Take another screenshot, of this zoomed view.

If you wish to also include a Frequency Analysis plot, re-select the zoomed portion by clicking on **Edit, Select** and **Select Current Time View**.

rehost image https://ptpimg.me/e17r5q.png

Then click **Window** and **Frequency Analysis**.

rehost image https://ptpimg.me/bpxha7.png

On the **Frequency Analysis** panel, click the **Scan Selection** button at the bottom.

rehost image https://ptpimg.me/9v7oku.png

After it refreshes, take another screenshot, of the plot. Then click **Window** and **Frequency Analysis** to close it.

You're done. Click **File** and **Close**, and click **No** on the save prompt. Audition will revert back to the stereo track you extracted the mono track from; close this stereo track too, and Audition should move on to the next stereo track in the queue.

Continue with the rest of the tracks until you're finished with the release. If you extracted any tracks to mono channels, then after closing the last stereo track, you'll have a bunch of left-channel mono tracks left over, which you can close without saving as well.




spek








shame noobs using spek

explain how to generate one using sox and audacity but suggest sox

brief tangent on how sox cant handle unicode so windows only users get ready to try wsl for the first time or suffer renaming files temporarily to use sox

analysing spectrals

show oddities that are still lossless

show shelf that is still lossless, explain why only relying on the shelf is bad

show differences between genres (in particular classical/quiet shit vs loud)

hyperfocus on detecting blocks, drill in how to see blocks and explain why blocks are always present in lossy encodes

tangent on how you can't look @ a spectral to determine the bitrate of the mp3 encoder used because you can encode an mp3 at any shelf, and diff encoders do weird shit

give a pop quiz with some obviously lossy / lossless to see 

give some ways to verify the source of files when trying to figure out lossy master vs bad transcode, go off on how doujin music is lossy mastered all the time