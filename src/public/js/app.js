const socket = new WebSocket(`ws://${window.location.host}`); // 웹소켓 생성

function handleOpen() {
  console.log("Connected to Server ✅");
}

function handleMessage(message) {
    console.log(message.data);
}

function handleClose() {
    console.log("Disconnected from Server ❌");
}


socket.addEventListener("open", handleOpen);

socket.addEventListener("message", handleMessage);

socket.addEventListener("close", handleClose);

setTimeout(() => socket.send("hello from the browser!"), 10000);
