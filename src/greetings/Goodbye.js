const Canvas = require("canvas");

module.exports = class Goodbye {

constructor() {
this.fm = "https://i.ibb.co/1sXNgXm/20211217-185048.png";
this.avatar = "https://i.ibb.co/C8SXBZK/Texas.jpg";
this.bg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpRpPJqAaE3pdxIC0CbdeII1pyt2JUCVPdA&usqp=CAU"
this.username = "Felixia";
this.color = "#ffffff";
}
setAvatar(value) {
this.avatar = value;
return this;
}
setUsername(value) {
this.username = value;
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
async toBuild() {
const canvas = Canvas.createCanvas(1200, 400);
const ctx = canvas.getContext("2d");
let background = await Canvas.loadImage(this.bg);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let based = await Canvas.loadImage(this.fm);
ctx.drawImage(based, 0, 0, canvas.width, canvas.height);

ctx.save();
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "#fff";
ctx.arc(105*2, 100*2, 76*2, 0, Math.PI * 2, true);
ctx.stroke();
ctx.closePath();
ctx.clip();
let avatar = await Canvas.loadImage(this.avatar);
ctx.drawImage(avatar, 29*2, 23*2, 153*2, 153*2);
ctx.restore();
  
let usrname = this.username;
let name = usrname.length > 9 ? usrname.substring(0, 9) + "..." : usrname;
ctx.globalAlpha = 1;
ctx.font = "64px Evogria";
ctx.textAlign = 'left';
ctx.fillStyle = "#fff";
ctx.fillText(name, 298*2, 104*2);

ctx.font = "103px RFlex";
ctx.textAlign = 'center';
ctx.fillStyle = "#fff";
ctx.fillText("GOODBYE", 405*2, 107);

return canvas;
}
};
