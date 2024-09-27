const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const port = 3001;

const socketio = require('socket.io')
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('send-location', (data) => {
        io.emit("receive-location", {id: socket.id, ...data})
    })
    socket.on('disconnect', () => {
        io.emit('user-disconnect',  socket.id);
    })
    console.log("Connected")
})
app.get('/', (req, res) => {
    res.render("index");
})

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})