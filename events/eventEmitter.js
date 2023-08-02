const {EventEmitter} = require("events");

const ev = new EventEmitter;

ev.on("saySomething", (message) => {  // ouvir eventos "ligar"
    console.log("Eu ouvi você: ", message)
}); 

ev.emit("saySomething", "Yan"); // emitir um evento usando parametros
ev.emit("saySomething", "Eduardo");