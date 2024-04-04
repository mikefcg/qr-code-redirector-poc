const express = require('express');
const app = express();
const port = 8888; // Choose any available port you like

// Define a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
