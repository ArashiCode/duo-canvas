const Canvas = require("canvas");
// Register font
Canvas.registerFont(`${__dirname}/assets/font/RFlexBold-VGzLZ.ttf`, { family: "RFlexBold" });
Canvas.registerFont(`${__dirname}/assets/font/Evogria.ttf`, { family: "Evogria" });

/*Module*/
module.exports.Welcome = require('./src/greetings/Welcome');
module.exports.Goodbye = require('./src/greetings/Goodbye');
module.exports.Rank = require('./src/rank/Rank');









