const express = require('express'); // imports express framework to create the web server
const bodyParser = require('body-parser'); // middleware for parsing the body of incoming HTTP requests
const { randomBytes } = require('crypto'); // module to generate random values
const cors = require('cors'); 
const axios = require('axios');


const app = express(); // this is a function call to the express module to create an instance of an express application
app.use(bodyParser.json()); // the result of `express()` (an express application) is stored in the constant `app`; this object encapsulates all functionality of express, allowing to set up server by defining routes, middleware and listening to your request
app.use(cors()); // server is configured to include CORS headers in its responses, telling browser it's ok to allow a web page from a different origin to make request to the server

const posts = {}; // object to store posts we create; simple in-memory storage, meaning data is lost when server restarts

// defines a route for HTTP GET request to the `/posts` URL; when accessed, it sends back the `posts` object
app.get('/posts', (req, res) => {
    res.send(posts); // sends current state of `posts` object back to client
});

// defines a route for HTTP POST request to the `/posts` URL; this route is used to create a new blog post
app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex') // generate random 4 bytes, converted to hex

    const { title } = req.body; // extract the `title` of the post from the request body

    posts[id] = {
        id, title
    }; // creates new post object with generated `id` and provided `title` and stores it in the `posts` object

    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id,
            title
        }
    });

    res.status(201).send(posts[id]); // sets HTTP response status to `201` (created) and sends back the newly created post
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);

    res.send({});
});

// starts the server on port `4000`; when server starts, it logs `Listening on 4000` to console
app.listen(4000, () => {
    console.log('Listening on 4000');
});