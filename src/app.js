// app.js
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const path = require('path');
const app = express();

app.use(cors()); //Para todo el mundo

const http = require('http').createServer(app);
const io = new Server(http);

app.use(require('./routes/transmisiones.routes'));
app.use(express.static(__dirname + "/public"));

io.on('connection', function(socket) {
    socket.on('stream', (image) => {
        socket.broadcast.emit('stream', image);
    });
});

module.exports = http;
