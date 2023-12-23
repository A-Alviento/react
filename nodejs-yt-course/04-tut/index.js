const logEvents = require('./logEvents');

const EventEmitter = require('events'); // EventEmitter is a class that we can use to create our own custom event emitters

class MyEmitter extends EventEmitter { }; // MyEmitter is a subclass of EventEmitter

// initialise object
const myEmitter = new MyEmitter(); // myEmitter is an instance of MyEmitter

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg)); // listener for the log event

setTimeout(() => {
    // emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);