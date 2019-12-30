// Node.js Template API

const mongoose = require('mongoose');

// Using Framework Express to Routes and Views
const express = require('express');
// Starting the App
const app = express();

// Starting the DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser : true });


// Routes
// First Route
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Listen to local channel 3001
// Can access at localhost:3001
app.listen(3001);