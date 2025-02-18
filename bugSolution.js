const express = require('express');
const app = express();
app.get('/', (req, res) => {
  let timeoutId = setTimeout(() => {
    res.send('Hello!');
  }, 5000);
  req.on('close', () => {
    clearTimeout(timeoutId); // Clean up resources on close
    console.log('Client connection closed before response sent.');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});