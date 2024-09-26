const express = require('express')
const socket = require('socket.io')
const https = require('http')
const { Chess } = require('chess.js');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('index', { title: "Chess Game" });
})


const server = https.createServer(app)
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = 'w';

io.on('connection', uniquesocket => {
    console.log(`Player connected`);

    if (!players.white) {
        players.white = uniquesocket.id;
        console.log(players)
        uniquesocket.emit("playerRole", "w");
    }
    else if (!players.black) {
        players.black = uniquesocket.id;
        console.log(players)
        uniquesocket.emit('playerRole', 'b');
    }
    else {
        uniquesocket.emit('spectatorRole');
    }

    const startingFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    uniquesocket.on('disconnect', () => {
        if (uniquesocket.id == players.white) {
            delete players.white;
            chess.load(startingFEN);
            console.log("White player disconnected, game reset.");
        } else if (uniquesocket.id == players.black) {
            delete players.black;
            chess.load(startingFEN);
            console.log("Black player disconnected, game reset.");
        }
        console.log(players);
    });


    uniquesocket.on("move", move => {
        try {
            if (chess.turn() == 'w' && uniquesocket.id !== players.white) return;
            if (chess.turn() == 'b' && uniquesocket.id !== players.black) return;

            const result = chess.move(move);
            if (result) {
                currentPlayer = chess.turn();
                console.log(currentPlayer)
                io.emit("move", move);
                io.emit("boardState", chess.fen());
            }
            else {
                console.log('Invalid Move: ', move);
                uniquesocket.emit("invalidMove", move);
            }
        } catch (err) {
            console.log(err.message);
            uniquesocket.emit("Something went wrong: ", move);
        }
    })
})
server.listen('3000', () => {
    console.log("Server is running on port 3000");
})