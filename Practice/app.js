const express = require('express')
const app = express();
const socket = require('socket.io')
const path = require('path')
const https = require('http')
const cors = require('cors')

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.render('index')
})

const server = https.createServer(app);
const io = socket(server);

io.on('connection', uniquesocket => {
    console.log('a new connection has been made!')
    uniquesocket.emit('hello', "hii");

})

server.listen(3030, () => {
    console.log('Server is running on port 3030')
});