// clearTimeout cancela o timeOut

const timeOut = 3000
const finished = () => console.log("done!")

let timer = setTimeout(finished, timeOut);
clearTimeout(timer);