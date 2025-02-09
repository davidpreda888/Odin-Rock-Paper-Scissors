const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {
    console.log("New client Connected");

    ws.on("message", data => {
        console.log(`Client sent: ${data}`);

        wss.clients.forEach( (client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
            }
        });

        // ws.send(data.toString());
    });

    ws.on("close", () => {
        console.log("Client has disconnected");
    });
});