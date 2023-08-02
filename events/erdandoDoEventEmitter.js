const { inherits } = require("util");
const { EventEmitter } = require("events");

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter);

const heroi = new Character("Yan Robert");

heroi.on("help", () => console.log(`Eu! o ${heroi.name} o brabo do NodeJS!!`));

console.log("Oh! E agora, quem poderá me defender?");

heroi.emit("help");