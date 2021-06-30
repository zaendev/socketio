const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// const io = require("socket.io")({
//     // path: "/test",
//     serveClient: false,
//   });

app.use(express.static('public'))

const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

io.on("connection", (socket) => {
    console.log(socket.id);

    // in a listener
    socket.on("message", (data) => {
        socket.emit('message', data)
    });
});

server.listen(3000);
