// Node.js Template API

// Using Framework Express to Routes and Views
const express = require('express');
const app = express();


// Routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Listen to local channel 3001
// Can access at localhost:3001
app.listen(3001);