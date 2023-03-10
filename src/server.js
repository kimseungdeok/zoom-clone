import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handelListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app); // http 서버 생성

const wss = new WebSocket.Server({ server }); // 웹소켓 서버 생성

function onSocketClose() {
  console.log("Disconnected from Browser ❌");
}

function onSocketMessage(message) {
    console.log(message.toString());
}

wss.on("connection", (socket) => {
  console.log("Connected to Browser ✅");
  socket.on("close", onSocketClose);
  socket.on("message", onSocketMessage);
  socket.send("hello!!");
});

server.listen(3000, handelListen);
