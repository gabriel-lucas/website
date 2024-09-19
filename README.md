<div style="display: flex; justify-content: space-between;" id="header" align="center">
 <img src="https://i.ibb.co/QkkTGpn/wikipedia2.gif" width="400" alt="wikipedia 3D logo"/>
  <img src="header.svg" height="270" alt="Wikipedia`s 3D is broken!">
</div>

# LET´S FIX IT!

[t.webm](https://github.com/user-attachments/assets/55f08378-e6be-4271-9209-09108196be6d)

## Context

Wikipedia needs more and better 3D content. For the last 10 years, Wikipedia has been struggling to be able to include 3D content. https://meta.wikimedia.org/wiki/User:Theredmonkey/Why_we_are_lacking_a_3D_strategy

Wikimedia contributors requested this feature in the [2015 Community Wishlist Survey](https://meta.wikimedia.org/wiki/Community_Wishlist_Survey_2015) organized by the [Community Tech](https://meta.wikimedia.org/wiki/Community_Tech) team. It ranked in [11th place](https://meta.wikimedia.org/wiki/Community_Wishlist_Survey_2015/Results) in the overall survey and [1st in the Commons category](https://meta.wikimedia.org/wiki/Community_Wishlist_Survey_2015/Commons#3D_models_on_Wikimedia_Commons). It also ranked 33rd in the [2016 Community Wishlist Survey](https://meta.wikimedia.org/wiki/Community_Wishlist_Survey_2016/Categories/Multimedia#3D_models).

The [3D extension](https://www.mediawiki.org/wiki/Extension:3D) for MediaWiki was created, and the [task was marked as done](https://phabricator.wikimedia.org/T3790), allowing to upload 3D models in the [STL file format](https://en.wikipedia.org/wiki/STL_(file_format)). In February 2018, [3D support was announced in Wikipedia](https://diff.wikimedia.org/2018/02/20/three-dimensional-models/).

[STL](https://en.wikipedia.org/wiki/STL_(file_format)) has some important limitations:
 - only describe the surface geometry of a 3D object, without any representation of color or texture.
 - file size. Can become large and unwieldy when trying to reduce inaccuracy.
 - Lacks support for scene hierarchy and animation.
 - 3D printing oriented was it´s main purpose and has not widely adopted as a 3D filetype standard.

As of July 24, 2023, there were around [4000 uploaded 3D models](https://commons.wikimedia.org/w/index.php?search=application%2FSLA&title=Special:MediaSearch&go=Go&type=other&filemime=sla) (.stl application/SLA) in Wikimedia Commons is almost nothing compared with the number of images, videos, and audio files.

Meanwhile, many 3D platforms and repositories were created, hosting hundreds of thousands of 3D models where people could upload and share their creations. Some of them even [experiment](https://sketchfab.com/blogs/community/introducing-volupedia-wikipedia-powered-by-sketchfab/) with the idea of including their 3D assets in Wikipedia.

During this time, [many conversations](https://phabricator.wikimedia.org/tag/3d/) [took place](https://lists.wikimedia.org/hyperkitty/list/wikimedia-l@lists.wikimedia.org/thread/T3TDXNOYBO2OUJVSKBOEFLY4I34YEA5B/#SNF5D5KQLWQUORTYKI6PWAUWYEC2VAXH) inside Wikipedia´s community, this one [was of the main ones](https://phabricator.wikimedia.org/T246901#9318627).

At some point a group of people joined this [telegram group](https://t.me/+tMgoJxx8D7I5NTQ8) and we started discussing how to move this forward.

[Discott](https://commons.wikimedia.org/wiki/User:Discott) proposed and presented this poster in Wikimania that sparked a [conversation here](https://commons.wikimedia.org/wiki/Commons:Village_pump/Proposals/Archive/2023/09#Enable_textured_3D_files_on_Commons).

<div id="header" align="center">
 <img src="https://i.ibb.co/PWpPZqx/3-D-Wiki-Poster-Wikimania-2023.png" width="600" alt="wikipedia 3D logo"/>
</div>

24 July 2024, during the [Wikimedia Hackaton 2024](https://www.mediawiki.org/wiki/Wikimedia_Hackathon_2024), Brooke Vibber submitted a version of the 3D extension to support GTLF format. [This is a work in progress and not finished yet.] (https://gerrit.wikimedia.org/r/c/mediawiki/extensions/3D/+/1026883)

Right now we could:

- Create a website explaining the issue and showing [how 3D content could look like](https://website-khaki-two-79.vercel.app/examples/triceratops2).
- Talk with persons involved in this, mainly Brooke Vibber and others.
- Search for resources to prototype it via some kind of grant (Flash grants, for example or others)
- Include it again in the [Community Wishlist](https://meta.wikimedia.org/wiki/Community_Wishlist).
- other ideas?


## How can I help?

- Join the conversation via the telegram group [telegram group](https://t.me/+tMgoJxx8D7I5NTQ8)
- Give a hand if you are a designer or website programmer.
- Help improve the 3D extension to support gtlf. Dev skills required!
- Help prepare a grant proposal.
- Donating money; get in contact via the telegram group.

 
