const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (messageText) => {
        io.emit('message', messageText);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
