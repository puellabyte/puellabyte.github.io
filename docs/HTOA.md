# **Hidden Tracks & HTOA**

There are several types of hidden tracks:  

A track hidden in the pregap (HTOA)  
A track that plays after a gap of silence on an official track  
A track separated by silent tracks (silent tracks between the final track & the hidden track)  

While two of these are pretty easy to understand, let's go over HTOA:  

**Hidden Track One Audio (HTOA)** is *non-silent* audio data located in the pre-gap (index 00) of track 1 on an audio CD.

CDs play from track 1 (index 01) which means the only way to hear an HTOA would be to rewind past track 1 into the pre-gap.

Very few CDs have an index 00 (pre-gap) before track 1 and when one does, it's usually just silence hence the destinction that HTOA is non-silent audio data.

Drives with "HTOA support" can extract audio data from index 00, those without said support can't, refuse to try or incorrectly pull silent audio data when attempting to read from that area of the CD.  
  
Since not all drives can handle HTOA you will need to reference [this list](https://www.daefeatures.co.uk/search) when trying to figure out whether a drive you own or a drive you plan on buying can or can't read HTOA, *it's not exhaustive and may not be fully accurate*.
<br></br>  

As for how to rip these tracks...
<br></br>  
# Ripping two tracks in one  

You can rip these the standard "100% log" way.  

They will appear in EAC/XLD as one or more tracks with a track length exceeding the official run time.  

Rename the TITLE field to that of both tracks such as `Example Title / Cool Song`  
(If the hidden track is unknown you can simply leave it as the official song title)

# Ripping tracks seperated by silent tracks

You can rip these the standard "100% log" way.  

They will appear in EAC/XLD as actual tracks incrementing the track number up until the final hidden track.  

Rename the TITLE field on these silent tracks to something like `(silent)`  

Because these silent tracks count as real tracks in EAC/XLD your hidden track will probably be Track 99 or something quite high. That's fine, leave it like that.

# **Ripping HTOA**

**This will be using Exact Audio Copy (EAC) to rip your CD containing HTOA.**

If you don't want to use Exact Audio Copy to rip HTOA you can reference [this list](https://wiki.hydrogenaud.io/index.php?title=Comparison_of_CD_rippers) for other CD Rippers that are capable of doing so, whether or not they have a guide on how to do it is another story.

  

# **A Track is highlighted in Red, Now what?**
![img](/images/HTOA1.png)

As you can see, EAC has highlighted the first track in red. This is because there is a hidden track in its pre-gap.


# **Verifying the HTOA is not just silence**

To verify that the HTOA is not just silence, click Actions \> Test Gaps On Silence or press F3 

![img](/images/HTOA5.png)

The results of this test will tell you whether or not the gaps on your CD are filled with silence or mostly audio.

![img](/images/HTOA4.png)

As seen in the image above, only 0.2% of the gap of Track 1 is filled with silence, meaning it is definitely an audio track.

# **Identifying the Range**

We need to identify the range of sectors which contain the HTOA. 

To do this, you can either rip a regular 100% log rip of this release or, at least enable the ability to output log files via EAC -> Tools
then, start & stop the ripping process to output an aborted log.

Open the log file associated with the aborted (or completed) rip to look at the TOC.

TOC of the extracted CD
|Track | Start | Length | Start Sector | End Sector |
| ----- | ----- | ------ | ------------ | ---------- |
| 1  |  2:03.00 |  3:44.50 	|  	__**9225**__ 	| 26074      |
| 2  |  5:47.50 |  4:00.61 	| 	26075	| 44135      |
|	3  |  9:48.36 |  7:30.40 	| 	44136	| 77925   |
|   	4  | 17:19.01 |  3:00.01 	| 	77926	| 91426 | 
| 5  | 20:19.02 |  4:17.25 	| 	91427	| 110726      |

The first track normally starts at sector 0\. In this case it starts at sector **9225**. 
This tells you the range of the hidden song: it extends from sector 0 to sector **9225**. (Your sectors will be different than mine)

# Performing a 'Range Rip'

**NOTE:** If you don't want the complete rip's .log file to be bundled together with the HTOA log, you'll need to rename it to something unique such as “Album Name (No HTOA).log” first.

Now that the sectors have been identified we can rip the track directly.   
To do this we need to make use of EAC's "Copy Range" function.  
Go to Actions \> Copy Range \> Compressed (Shift F7)  

![img](/images/HTOA2.png)

Note that "Block" in the below UI refers to the sectors you see in your logs TOC.  
We will need to fill out the "Select Start Position" and the "Start End Position" fields  

![img](/images/HTOA3.png)

The start block should be set to 0.  

The end block is the start sector of the first track minus one.

Using the below log output as an example:

TOC of the extracted CD
|Track | Start | Length | Start Sector | End Sector |
| ----- | ----- | ------ | ------------ | ---------- |
| 1  |  2:03.00 |  3:44.50 	|  	__**9225**__ 	| 26074      |
| 2  |  5:47.50 |  4:00.61 	| 	26075	| 44135      |
|	3  |  9:48.36 |  7:30.40 	| 	44136	| 77925   |
|   	4  | 17:19.01 |  3:00.01 	| 	77926	| 91426 | 
| 5  | 20:19.02 |  4:17.25 	| 	91427	| 110726      |

The 'start sector' of the first track is **9225**.  
The 'end block' is therefor **9224** (9225 - 1)

Once set, we hit "OK" and wait for the rip to complete.

Once the rip finishes, (*don't delete anything prior to re-ripping*) run the rip exactly the same way for a second time with the same file name. EAC will overwrite the file in question and it will append a new extraction log to your previous log file. This will cause your log file to have two different CRC values to compare, essentially mimicking the Test & Copy function.

If all went well, the two CRC values will match. Your log should look something like this:

```
Exact Audio Copy V1.3 from 2. September 2016

EAC extraction logfile from 9. January 2021, 22:44

Clonesoldier's Factory / Milagro & Magia

(...)

Range status and errors

Selected range   (Sectors 0-9224)

	Filename S:\harky\00. Hidden Track.wav

	Peak level 100.0 %
	Extraction speed 2.1 X
	Range quality 100.0 %
	Copy CRC 47D46C3E
	Copy OK

No errors occurred

AccurateRip summary

No tracks could be verified as accurate

End of status report

==== Log checksum D94434EC9D600D415825540D81E5EB6CB86517C03DC2A5A2BE25B0251ED9F6C2 ====

Exact Audio Copy V1.3 from 2. September 2016

EAC extraction logfile from 9. January 2021, 22:57

Clonesoldier's Factory / Milagro & Magia

(...)

Range status and errors

Selected range   (Sectors 0-9224)

	Filename S:\harky\00. Hidden Track.wav

	Peak level 100.0 %
	Extraction speed 2.0 X
	Range quality 100.0 %
	Copy CRC 47D46C3E
	Copy OK

No errors occurred

AccurateRip summary

No tracks could be verified as accurate

End of status report

==== Log checksum B575B8CF258EFA3D560E9965702ADC386F3D7C8FC25473FC872A9D1F887D580C ====
```


You want the values in the "Copy CRC" line to match, and you don't want to see "Suspicious Position(s)" or "Timing Problem(s)"

If your CRC values match & you've already ripped the rest of the CD w/ 100% log you're finished the ripping process, if however they don't match or you do see the dreaded error messages, see below:

# **Failed Ripping Attempt**

Not all drives are made equal, some cannot rip HTOA tracks & others will only rip silence. In some cases, you will be able to rip HTOA tracks with "Burst Mode" instead of "Secure Mode" but you won't receive the coveted "100% log" rating.

When you fail to rip the HTOA track EAC should slow to a crawl while extracting. The error correction box will light up and EAC should display read/sync error messages.

The .log file that you'll receive after failing a ripping attempt will look like:
                                     
```
Range status and errors

Selected range   (Sectors 0-9224)

	Filename S:\harky\Hidden Track.wav

	Suspicious position 0:02:00 - 0:02:01

	Peak level 100.0 %
	Extraction speed 1.5 X
	Range quality 83.0 %
	Copy CRC A05DFA0A
	Copy finished

There were errors
```

So, what is the solution?

You can either attempt to rip the CD with other drive(s) you have access to, or you can switch your extraction method in Drive Options -> Extraction Method to "Burst Mode" as mentioned above. 

Note that "Burst Mode" may still fail to rip the HTOA track correctly depending on drive.

It should also be mentioned that most drives won't be able to detect that there is an HTOA track at all if they lack HTOA support. So, you will never see the first track light up in red. 

If the CD you're ripping is known to have an HTOA track due to a database saying so or an existing rip having one but your first track doesn't light up red — congrats, you've now learnt your drive doesn't have HTOA support :(  
<br></br>  
The rest of this guide assumes you were able to create an HTOA track
<br></br>  
# **Editing & creating an HTOA Cuesheet**

*full disclosure: this is mostly for those who want to go above and beyond, no one really cares if your cuesheet works*

Once you've ripped the hidden track as well as the CD itself and have all tracks accounted for you will still need to do one last thing, edit your cuesheet. This obviously only applies if you create CUE sheets for your rips in the first place.

The hidden song was not included in the normal ripping process, and is therefore not contained in the cue sheet for the CD. If you were to use the cue sheet "as is" for burning a copy of the CD, the hidden song would not be included.

Just like how some drives are incapable of ripping a hidden track, some drives are incapable of burning a hidden track back to CD. For this reason, you can create an alternative cue sheet that treats the hidden track as a bonus track (adding it to the end of the album) on top of the original cuesheet you'll be editing.

A CUE made by doing: Actions" \> Create CUE Sheet \> Multiple WAV files with Gaps... (Nonompliant) looks like this:

```
REM DATE 2011
REM DISCID 7F0A940A
REM COMMENT "ExactAudioCopy v1.3"
PERFORMER "Clonesoldier's Factory"
TITLE "Milagro & Magia"
REM COMPOSER ""
FILE "01. クローンソルジャー - Historia puellarum.wav" WAVE
 TRACK 01 AUDIO
   TITLE "Historia puellarum"
   PERFORMER "クローンソルジャー"
   REM COMPOSER ""
   INDEX 00 00:00:00
   PREGAP 02:03:00
 INDEX 01 00:00:00
(...)
 TRACK 10 AUDIO
   TITLE "Please be a magical girl!!! (Bonus Track)"
   PERFORMER "クローンソルジャー"
   REM COMPOSER ""
   INDEX 00 04:24:61
FILE "10. クローンソルジャー - Please be a magical girl!!! (Bonus Track).wav" WAVE
   INDEX 01 00:00:00
```
**Editing your original cuesheet**

**Copy the line** "FILE "01. Whatever the name of the song is.wav" WAVE"  
(for example: `FILE "01. クローンソルジャー - Historia puellarum.wav" WAVE`)  
keep it copied, we will be pasting it in somewhere shortly.  
<br></br>
**Edit the line** "FILE "01. Whatever the name of the song is.wav" WAVE"  
(for example: `FILE "01. クローンソルジャー - Historia puellarum.wav" WAVE`)  

to: "FILE "00. Whatever the name of the hidden track is.wav" WAVE" instead.  
(for example: `FILE "00. Hidden Track.wav" WAVE`)  

It's important that the filename chosen is exactly the same as the filename used for the hidden track so, if your hidden tracks file name is: `00. Super Secret Track`

The line should reflect that name exactly, as `FILE "00. Super Secret Track.wav" WAVE`

Now, we will replace the PREGAP. In the above CUE Sheet the line is `"PREGAP 02:03:00"` but will be different for you.

you would paste `"FILE "01. Whatever the name of the song is.wav" WAVE"` right on top of `"PREGAP 02:03:00"` deleting it

Now, on top of the PREGAP line, you would create a new line and paste `"INDEX 00 00:00:00"`

This is the final result: 
```
REM DATE 2011
REM DISCID 7F0A940A
REM COMMENT "ExactAudioCopy v1.3"
PERFORMER "Clonesoldier's Factory"
TITLE "Milagro & Magia"
REM COMPOSER ""
FILE "00. Hidden Track.wav" WAVE
 TRACK 01 AUDIO
   TITLE "Historia puellarum"
   PERFORMER "クローンソルジャー"
   REM COMPOSER ""
	INDEX 00 00:00:00
FILE "01. クローンソルジャー - Historia puellarum.wav" WAVE
   INDEX 01 00:00:00
 TRACK 02 AUDIO
(...)
```

**Creating a bonus track cuesheet**

For the "bonus track" version of the cue sheet, here is an example of what to do based on the above cuesheet:

Make a copy of your existing cuesheet and name it something like `*(HTOA as a bonus track).cue` then edit it:

**Remove the pregap line** `"PREGAP 02:03:00"` for Track 01 completely. (The length will be different for you)

Copy the details for the last track of the original cue sheet, then paste it below so that you have two entries for the last track. The information you want to copy starts at `"TRACK 10 AUDIO"` (or whatever number for you) and ends at `"INDEX 01 00:00:00"` So, using the above example we would do the following...

**Copy this**:

```
 TRACK 10 AUDIO
   TITLE "Please be a magical girl!!! (Bonus Track)"
   PERFORMER "クローンソルジャー"
   REM COMPOSER ""
   INDEX 00 04:24:61
FILE "10. クローンソルジャー - Please be a magical girl!!! (Bonus Track).wav" WAVE
   INDEX 01 00:00:00
```

and paste it right after it so that there are two of the same entry.

**Edit the pasted entry:** 

Add \+1 to the "TRACK \#"  
(for example: `TRACK 10 AUDIO` becomes `TRACK 11 AUDIO`)

Change the TITLE to the title of your HTOA track  
(for example: `TITLE “Hidden Track”`)

Change the PERFORMER to the performer of your HTOA track  
(for example: `PERFORMER "Example Artist"`) 

Change the COMPOSER to the composer of your HTOA track  
(for example: `REM COMPOSER "Example Artist"` or leave blank if no composer)

If there is an INDEX 00 line for the track you copied delete it.  
(This is found above the `FILE "10. xxx.wav" WAVE` line)

Replace the filename with your HTOA tracks filename  
(for example: `“FILE "00. Hidden Track.wav" WAVE”`)  

Make sure that the INDEX 01 00:00:00 line below correctly displays 00:00:00  
(edit it to do so if for some reason it doesn't say `INDEX 01 00:00:00`)

So, using the above

**Pasted Entry (Edited):**

```
TRACK 11 AUDIO
   TITLE "Hidden Track"
   PERFORMER "クローンソルジャー"
   REM COMPOSER ""
FILE "00. Hidden Track.wav" WAVE
   INDEX 01 00:00:00
```

The track number has been changed to be the final track on the album, in this case 11.  
The FILE line has been changed to reference the HTOA tracks file name.  
The `INDEX 00 04:24:61` line above the FILE line has been deleted.  

Once done, save the edited cue sheet.  

**Note:** This is not a cue sheet that will allow you to burn an exact copy of the original CD, however it will be usable with practically any drive. Ideally, you would include both the "original" cue as well as the "bonus track" cue when sharing.

# Standard for sharing HTOA Rips

Brief overview of how one should be sharing rips with HTOA tracks.  
*Not applicable if you don't share your rips*

**File Name:** Untitled, Hidden Track, HTOA or the confirmed title if applicable

**Track Number**: 0

**Metadata:** Fill out the TRACKNUMBER, TITLE, ARTIST, ALBUM and YEAR fields  
(Use "Unknown Artist" or, the Album Artist / Circle if the ARTIST is unknown)

**Folder Name:** Does not need to include that it contains an HTOA track, unless an identical edition exists without one

**CUE Sheet(s):** Either a Bonus Track or Exact Copy CUE sheet included properly labeled.

**Log:** One log for the complete CD rip and one log for the two range rips for the HTOA track should be included.

Note: Don't edit the log file(s) leave them exactly how they are. If you have a single log file for all 3 rips, don’t edit it into two different logs, leave it.  

![img](/images/HTOA6.png)

As seen by the example above...  

The HTOA Track has been included as `"00. Hidden Track.flac"`  
The metadata contains the track number `"00"`, the title `"Hidden Track"` the contributing artist is set as the Circle name (`Clonesoldier's Factory`) as the artist of the track is unknown, and the album is set as the album the release appears on "`Milagro & Magia`"

There are `two separate .log files`, one of which contains the entire CD titled "`Circle - Album.log`" while the second log file contains the `two HTOA rips` and is titled "`Circle - Album (HTOA).log`"

There are `two seperate .cue files`, one of which is the "Exact Copy" CUE titled "`Circle - Album.cue`" while the second is the "Bonus Track" CUE titled "`Circle - Album (Bonus Track).cue`"  

There is also an `edited .m3u file that contains the bonus track` which is simply titled "`Circle - Album.m3u`"

the inclusion of an m3u is completely optional but hey, here's how to edit it:

# Editing an M3u file to contain HTOA

You can create an .m3u file when ripping your CD using EAC by going to EAC Options > Tools then selecting "Create '.m3u' playlist on extraction" "Write m3u playlist with extended information" as well as "Write m3u playlist as UTF8 file"

You could also use other programs to generate an m3u from specified files instead, unsure if they will include the HTOA track in the m3u file, so this will cover editing an m3u file output by EAC. 

If your program includes the HTOA in the m3u there is no need to do this.  

Here is an example of an .m3u file output from ripping a 10 track CD that contains a hidden track in the pre-gap of Track 1\.

```
#EXTM3U
#EXTINF:225,クローンソルジャー - Historia puellarum
01. クローンソルジャー - Historia puellarum.flac
#EXTINF:241,瑞鶴P - Magia - relaxed mix -
(...)
#EXTINF:207,クローンソルジャー - Please be a magical girl!!! (Bonus Track)
10. クローンソルジャー - Please be a magical girl!!! (Bonus Track).flac
```

As you can see only 10 tracks are referenced in the m3u file despite there being 11 tracks (track 0, the pre-gap + 10 normal tracks)

If you want the 11th track (00. Hidden Track for me) to show up, you'll need to add it to the .m3u file. To do so, all you need to do is…

**Find the length of the track:** Use software that displays the length of your HTOA track    
(For the purpose of this guide, the track length is 2:03)  

**Copy the first entry in the .m3u file:**  
(Two lines, one saying `#EXTINF:000` and the other saying the file name `01. xxx.flac`)  

Then paste these two lines above the first `#EXTINF:000,...` line like this:

```
#EXTM3U
#EXTINF:225,クローンソルジャー - Historia puellarum
01. クローンソルジャー - Historia puellarum.flac
#EXTINF:225,クローンソルジャー - Historia puellarum
01. クローンソルジャー - Historia puellarum.flac
```

The end result should be that you now have two first entries.

**Edit the pasted entry:**

On the first line we will be replacing the track lengths & track title. 

The 3-4 numbers after `#EXTINF:` are the length of the track  
Replace the existing track length with your HTOAs track length  
(for example, `#EXTINF:225` becomes `#EXTINF:203`)  

The title of the track comes after the comma so `#EXTINF:203,xxx`  
Replace the title of the track with your HTOA tracks name  
(for example `(...)Historia puellarum` becomes `#EXTINF:203,Hidden Track`)

On the second line you'd replace the file name with the HTOA tracks.

For example `01. クローンソルジャー - Historia puellarum.flac` becomes `00. Hidden Track.flac`

Once done, save your .m3u file then test it out, if done correctly the .m3u file should create a playlist with the hidden track.

The final result will look something like this:

```
#EXTM3U
#EXTINF:203,Hidden Track
00. Hidden Track.flac
#EXTINF:225,クローンソルジャー - Historia puellarum
01. クローンソルジャー - Historia puellarum.flac
(...)
#EXTINF:207,クローンソルジャー - Please be a magical girl!!! (Bonus Track)
10. クローンソルジャー - Please be a magical girl!!! (Bonus Track).flac
```