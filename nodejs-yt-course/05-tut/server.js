const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events'); // EventEmitter is a class that we can use to create our own custom event emitters
class Emitter extends EventEmitter { }; // MyEmitter is a subclass of EventEmitter
// initialise object
const myEmitter = new Emitter(); // myEmitter is an instance of MyEmitter

const PORT = process.env.PORT || 3500; // set port to 3500 or whatever is in the environment variable PORT

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// myEmitter.on('log', (msg) => logEvents(msg)); // listener for the log event
//     myEmitter.emit('log', 'Log event emitted!');
