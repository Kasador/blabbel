const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
let io = require('socket.io');

// route
app.get('/', (req, res) => {
    res.end("worked");
});

// io.on('connection', function(socket){
//     console.log('a user connected');
// });

// listen
app.listen(port, () => console.log(`Listening on port: ${port}!`))