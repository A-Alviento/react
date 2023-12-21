const express = require('express'); // express is used for creating http server
const app = express(); // creates express application
const port = process.env.PORT || 3001;
const axios = require('axios') // axios is imported which is a promise-based http client used for making http requests

/** 
 * application defines a GET endpoint at '/orders/inventory'
 * app.get('/orders/inventory', async(req, res) => {...})  is an async function handler for GET 
 * request to /orders/inventory
 */ 

app.get('/orders/inventory', async (req, res) => {
  try {
    const inventoryResponse = await axios.get('http://localhost:3002/inventory'); // http get request made to another service (the inventory microservice) using axios; await keyword used to wait for the promise returned by `axios.get` to resolve

    res.send(`Orders Microservice received data from Inventory Microservice: ${inventoryResponse.data}`); // if request is successful, response from inventory microservice is sent back to the client who requested `/orders/inventory`
  } catch (error) { // if http req fails, error message logged and 500 server error response sent back
    console.error(`Error fetching data from Inventory Microservice: ${error.message}`);
    res.status(500).send('Error fetching data from Inventory Microservice');
  }
});

// this starts the server, listening on the specified port
app.listen(port, () => {
  console.log(`Orders Microservice listening on port ${port}`);
});