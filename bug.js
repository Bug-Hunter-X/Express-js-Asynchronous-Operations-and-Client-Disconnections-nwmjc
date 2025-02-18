const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello!');
  }, 5000); // Simulate a delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//In this example, if a request comes to the server, before the response is sent the connection is closed, the client will not receive the response. 
//This is a very common scenario in express.js when dealing with asynchronous operations. If the client closes the connection before the response is sent, Node.js will throw an error to the console and may terminate the process in some cases, depending on the error handling.
//This may lead to unexpected behavior and bugs that can be hard to reproduce.
