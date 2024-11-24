const express = require('express');
const socket = require('socket.io');
const path = require('path');
const http = require('http');
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.get('/', (req, res) => {
    //     res.render('index');
    // });
    
app.get('/', (req, res)=>{
    res.render('chat')
})

const users = {};

io.on('connection', (socket) => {
    console.log('Connection created');
    
    if(!users.first){
        users.first = socket.id;
        console.log('connect: ',users);
    }else if(!users.second){
        users.second = socket.id;
        console.log('connect: ',users);
    }

    socket.on('send-message', (msg) => {
        let color = users.first == socket.id ? 'blue' : 'red';
        io.emit('receive-message', {msg, color});
    })

    socket.on("disconnect", () => {
        if(users.first == socket.id){
            delete users.first;
            console.log('disconnect: ',users);
        }else if(users.second == socket.id){
            delete users.second;
            console.log('disconnect: ',users);
        }
    })
})



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});