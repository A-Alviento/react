const express = require('express'); // express is used for creating http server
const app = express(); // creates express application
const port = process.env.PORT || 3001;
const axios = require('axios') // axios is imported which is a promise-based http client used for making http requests

// for authentication purposes
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');

/** 
 * application defines a GET endpoint at '/orders/inventory'
 * app.get('/orders/inventory', async(req, res) => {...})  is an async function handler for GET 
 * request to /orders/inventory
 */ 
app.get('/orders/inventory', async (req, res) => {
  try {
    const token = req.headers.authorization; // retrieve authorisation token from request headers made by client

    const inventoryResponse = await axios.get('http://localhost:3002/inventory', { headers: { authorization: token } }); // HTTP GET request to the inventory microservice, passing authorisation token in the request headers; the app awaits the response

    res.send(`Orders Microservice received data from Inventory Microservice: ${inventoryResponse.data}`); // if successful, response from inventory microservice is sent back to the client
  } catch (error) {
    console.error(`Error fetching data from Inventory Microservice: ${error.message}`);
    res.status(500).send('Error fetching data from Inventory Microservice');
  }
});

const jwtSecret = 'my-secret-key';

// POST endpoint to handle authentication request
app.post('/orders/auth', (req, res) => {
  const token = jwt.sign({ user: 'orders-service' }, jwtSecret, { expiresIn: '1h' }); // JWT is signed and sent back to client
  res.send({ token });
});

// the application uses `express-jwt` middleware to validate JWTs on protected routes
app.use(expressJwt({ secret: jwtSecret, algorithms: ['HS256'] }).unless({ path: ['/orders/auth'] }));


// this starts the server, listening on the specified port
app.listen(port, () => {
  console.log(`Orders Microservice listening on port ${port}`);
});