const Canvas = require("canvas");

module.exports = class Goodbye {

constructor() {
this.fm = "https://rawcdn.githack.com/Lingz-ui/data-myBot/2662c2b0f8fbe9d8d448f3194943c9f9951da5d0/wa-code/hosting-bot/assets/20220327_212251.png";
this.avatar = "https://i.ibb.co/C8SXBZK/Texas.jpg";
this.bg = "https://i.ibb.co/ChK2WWG/Null.jpg"
this.username = "Felixia";
this.server = "SQUAD404";
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
setSERVER(value) {
this.server = value;
return this;
}
async toCreate() {
const canvas = Canvas.createCanvas(2100, 1034);
const ctx = canvas.getContext("2d");
const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let yyyy = d.getFullYear();
let mm = d.getMonth() + 1;
let dd = d.getDate();


let background = await Canvas.loadImage(this.bg);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let based = await Canvas.loadImage(this.fm);
ctx.drawImage(based, 0, 0, canvas.width, canvas.height);

ctx.save();
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#000";
ctx.arc(1545, 637, 260, 0, Math.PI * 2, true);
ctx.stroke();
ctx.closePath();
ctx.clip();
let avatar = await Canvas.loadImage(this.avatar);
ctx.drawImage(avatar, 1285, 376, 522, 522);
ctx.restore();


let namae = this.username
ctx.fillStyle = "#000000";
let namee = namae.length > 18 ? namae.substring(0, 18) + " " : namae;
ctx.font = "120px NVM";
ctx.textAlign = 'left';
ctx.fillText('codename : ' + namee, 70, 825);



let usr = this.server
let name = usr.length > 13 ? usr.substring(0, 13) + " " : usr;
ctx.font = "96px HVitas";
ctx.textAlign = 'left';
//merah
ctx.fillStyle = "#E91E63";
ctx.fillText(name, 183, 523);
//biru
ctx.fillStyle = "#02FFC2";
ctx.fillText(name, 177, 517);
//putih
ctx.fillStyle = "#ffffff";
ctx.fillText(name, 180, 520);

/*******

time

*******/


let datess = dd + '-' + mm + '-' + yyyy;
ctx.fillStyle = "#ffffff";
let dates = datess.length > 11 ? datess.substring(0, 11) + " " : datess;
ctx.font = "95px NVM";
ctx.textAlign = 'left';
ctx.fillText(dates, 55, 1008);

let hourse = h + ':' + m;
ctx.fillStyle = "#ffffff";
let hoursed = hourse.length > 9 ? hourse.substring(0, 9) + " " : hourse;
ctx.font = "95px NVM";
ctx.textAlign = 'right';
ctx.fillText(hoursed, 2075, 1008);


return canvas;
}
};
