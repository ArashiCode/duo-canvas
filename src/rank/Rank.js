const Canvas = require("canvas");
  function intToString(num) {
if (num < 1000) {
return num;
}
var si = [
  {v: 1E3, s: "K"},
  {v: 1E6, s: "M"},
  {v: 1E9, s: "B"},
  {v: 1E12, s: "T"},
  {v: 1E15, s: "P"},
  {v: 1E18, s: "E"}
  ];
var i;
for (i = si.length - 1; i > 0; i--) {
if (num >= si[i].v) {
    break;
}
}
return (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].s;
}


module.exports = class Rank {

constructor() {
this.bg = "https://i.ibb.co/yy1H0HD/V.jpg";
this.avatar = "https://i.ibb.co/C8SXBZK/Texas.jpg";
this.levelbg = "https://i.ibb.co/dkHggV4/Level.png";
this.needxp = "100";
this.rank = "56";
this.currxp = "50";
this.color = "#00ff93";
this.level = "2";
}
setAvatar(value) {
this.avatar = value;
return this;
}
setBg(value) {
this.bg = value;
return this;
}
setColor(value) {
this.color = value;
return this;
}
setNeedxp(value) {
this.needxp = value;
return this;
}
setCurrxp(value) {
this.currxp = value;
return this;
}
setLevel(value) {
this.level = value;
return this;
}
setRank(value) {
this.rank = value;
return this;
}
async toBuild() {

const canvas = Canvas.createCanvas(1200, 520);
const ctx = canvas.getContext("2d");
const currxp = this.currxp;
const needxp = this.needxp;
var curr = intToString(currxp);
var need = intToString(needxp);
let background = await Canvas.loadImage(this.bg);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let b = await Canvas.loadImage(this.levelbg);
ctx.drawImage(b, 0, 0, canvas.width, canvas.height);

ctx.lineWidth = 5;
ctx.strokeStyle = this.color;
ctx.rect(54*2, 61*2, 137*2, 137*2);
const avatar = await Canvas.loadImage(this.avatar);
ctx.drawImage(avatar, 54*2, 61*2, 137*2, 137*2);
ctx.stroke();

let usrname = "120";
let name = usrname.length > 9 ? usrname.substring(0, 9) + "..." : usrname;
ctx.globalAlpha = 1;
ctx.font = "64px Evogria";
ctx.textAlign = 'center';
ctx.fillStyle = this.color;
ctx.fillText(`${intToString(this.level)}`, 286*2, 177*2);

ctx.font = "38px Evogria";
ctx.textAlign = 'left';
ctx.fillStyle = this.color;
ctx.fillText(`${curr}/${need}`, 403*2, 141*2);

ctx.font = "64px Evogria";
ctx.textAlign = 'left';
ctx.fillStyle = this.color;
ctx.fillText(`RANK ${intToString(this.rank)}`, 373*2, 205*2);


let fullbar = (500 * 640) / 500;
ctx.beginPath();
ctx.fillStyle = "#4e4e4e";
ctx.arc(227*2, 81*2, 18.5*2, 1.5 * Math.PI, 0.5 * Math.PI, true);
ctx.fill();
ctx.fillRect(227*2, 62*2, fullbar, 37.5*2);
ctx.arc(454 + fullbar, 81*2, 18.75*2, 1.5 * Math.PI, 0.5 * Math.PI, false);
ctx.fill();        


let widthXP = (currxp * 640) / needxp;
if (widthXP > 615 - 18.5) widthXP = 640 - 18.5*2;
ctx.beginPath();
ctx.fillStyle = this.color;
ctx.arc(227*2, 81*2, 18.5*2, 1.5 * Math.PI, 0.5 * Math.PI, true);
ctx.fill();
ctx.fillRect(227*2, 62*2, widthXP, 37.5*2);
ctx.arc(454 + widthXP, 81*2, 18.75*2, 1.5 * Math.PI, 0.5 * Math.PI, false);
ctx.fill();

return canvas;
}
};
