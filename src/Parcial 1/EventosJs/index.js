import  events  from "events";
const eventEmitter = new events.EventEmitter();

eventEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

function showMessage () {
    setTimeout(() => eventEmitter.emit("Iniciado"),1000);
    setTimeout(() => eventEmitter.emit("A medias"),3000);
    setTimeout(() => eventEmitter.emit("Finalizado"),8000);
    return eventEmitter;
}

let mess = showMessage();

mess.on("Iniciado", () => console.log("Iniciado"));
mess.on("A medias", () => console.log("Ya mero acabo"));
mess.on("Finalizado", () => console.log("Ya acabamos!!"));