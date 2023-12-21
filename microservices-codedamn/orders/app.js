const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/orders', (req, res) => {
  res.send('Hello from the Orders Microservice!');
});

app.listen(port, () => {
  console.log(`Orders Microservice listening on port ${port}`);
});