// setInterval irá rodar uma função N vezes
// depois de x milissegundos

const timeOut = 1000;
const finished = () => console.log("checking!");

setInterval(finished, timeOut);
