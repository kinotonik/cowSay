const meWCS = require("./information.js");
console.log(meWCS)

cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Azul ! Je suis ${meWCS.name} l'aroiul et le campus est du style ${meWCS.campus}, mon bureau quoi :)`,
    e : "oO",
    T : "U ",
}));
