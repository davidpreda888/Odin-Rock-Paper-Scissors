const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {
    console.log("New client Connected");

    ws.on("message", data => {
        console.log(`Client sent: ${data}`);

        ws.send(data.toString().toUpperCase());
    });

    ws.on("close", () => {
        console.log("Client has disconnected");
    });
});