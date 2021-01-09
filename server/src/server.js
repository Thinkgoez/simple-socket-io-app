const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('Server listening at port', port, ' eeeeeeeee');
});

app.use(cors())

io.on('connection', (client) => {

    client.on('subscribeToTimer', (interval) => {
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});


// http.listen(PORT, { log: false, origins: '*:*' });