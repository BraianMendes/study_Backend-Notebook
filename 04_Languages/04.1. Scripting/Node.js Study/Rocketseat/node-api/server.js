// Node.js Template API

// Using Framework Express to Routes and Views
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const requireDir = require('require-dir');


// Starting the App
const app = express();
app.use(express.json());
app.use(cors());

// Starting the DB
mongoose.connect(
	'mongodb://localhost:27017/nodeapi', 
	{ 
		useNewUrlParser : true,
		useUnifiedTopology: true
	}
);
requireDir('./src/models');

// Routes
app.use('/api', require('./src/routes'));

// Listen to local channel 3001
// Can access at localhost:3001
app.listen(3001);