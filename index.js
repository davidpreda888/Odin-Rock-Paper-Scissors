const WebSocket = require("ws");

const port = process.env.PORT || 8082;
const wss = new WebSocket.Server({ port });
console.log(`WebSocket server is running on port ${port}`);

let players = [];
let choices = {};


wss.on("connection", ws => {
    console.log("New client Connected");

    if (players.length >= 2) {
        ws.send(JSON.stringify({ type: "error", message: "Game is full"}));
        ws.close();
        return;
    }

    const playerId = players.length + 1;
    players.push(ws);
    ws.send(JSON.stringify({ type: "info", player: playerId, message: `You are player ${playerId}`}));

    ws.on("message", (message) => {
        console.log(`Client sent: ${message}`);
        
        const data = JSON.parse(message);

        if (data.type === "choice") {
            choices[playerId] = data.choice;
            console.log(`Player ${playerId} chose ${data.choice}`);

            if (Object.keys(choices).length === 2) {
                const result = determineWinner(choices[1], choices[2]);

                players.forEach((player, index) => {
                    player.send(JSON.stringify({
                        type: "result",
                        result: result,
                        yourChoice: choices[index + 1],
                        opponentChoice: choices[index === 0 ? 2 : 1]
                    }));
                });

                choices = {};
            }
        }
    });

    ws.on("close", () => {
        console.log(`Player ${playerId} disconnected`);
        players = players.filter(p => p !== ws);
        choices = {};
    });
});

function determineWinner(choice1, choice2) {
    if (choice1 === choice2) return "Draw!";
    if (
        (choice1 === "rock" && choice2 === "scissors") ||
        (choice1 === "scissors" && choice2 === "paper") ||
        (choice1 === "paper" && choice2 === "rock")
    ) {
        return "Player 1 Wins!";
    }
    return "Player 2 Wins!";    
}