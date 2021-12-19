<p align="center">
  <img width="190" height="190" src="https://i.ibb.co/5Mm7vsX/Friends.png"></p>
<h1 style="text-align: center;color:#5d74ae;"><pre>duo-canvas</pre></h1>

<h3 align="center">Made with <strong style="color:#ff0062;">♥</strong> by</h3>
<p align="center">
  <a href="https://github.com/Lingz-ui"><img src="https://i.ibb.co/tp4Lwp0/Ling.png" height="128" width="128" /></a>
  <a href="https://github.com/Felix-403"><img src="https://i.ibb.co/Hn0gr0X/Felix.jpg" height="128" width="128" /></a>
</p>

## ≛Installation

```bash
$ npm install duo-canvas

```
## ⍚feature
#### 1. Welcome && Goodbye
```js
const cduo = require("duo-canvas");
const fs = require('fs');

const image = await new cduo.Welcome() // Goodbye()
    .setAvatar("https://i.ibb.co/C8SXBZK/Texas.jpg")
    .setUsername("FELIXIA")
    .setBg("https://i.ibb.co/yy1H0HD/V.jpg")
    .setColor("#ffffff")
    .toBuild();
    
  data = image.toBuffer();
  await fs.writeFileSync('./tmp/welcome.png', data)
 

```
<img width="215" src="https://i.ibb.co/SN69Nyd/Preview.png">

#### 2. Rank

```js
const cduo = require("duo-canvas");
const fs = require('fs');

const image = await new cduo.Rank()
    .setAvatar("https://i.ibb.co/C8SXBZK/Texas.jpg")
    .setBg("https://i.ibb.co/yy1H0HD/V.jpg")
    .setNeedxp("100000")
    .setCurrxp("58000")
    .setLevel("120")
    .setRank("17")
    .setColor("#00ff93")
    .toBuild();
    
  data = image.toBuffer();
  await fs.writeFileSync('./tmp/rank.png', data)
 
 
```
<img src="https://i.ibb.co/VqTCgY8/Level.jpg" width="215"/>


<h3 align="center"><b style="color:#ff0000">T</b><b style="color:#ffd800">H</b><b style="color:#53ff58">A</b><b style="color:#5300ae">N</b><b style="color:#ff0081">K</b><b style="color:#2966ff">S</b> For Using <strong style="color:#00ffab;">(＾▽＾)</strong></h3>
<p align="center">
<img width="185"src="https://i.ibb.co/mDnQK18/Dark-Story.jpg"></p>







