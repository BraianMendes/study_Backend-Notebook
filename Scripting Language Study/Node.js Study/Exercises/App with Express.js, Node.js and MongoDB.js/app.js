// Dependencies
var express = require("express");

// Start Express App
var app = express();

// Define Port
var port = 3000;

// Express Middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true
}));

// Connecting to Database
// Using MongoDB
var mongoose = require("mongoose"); 
mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost:27017/node-demo");

// Schemas
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);

// Routes
app.get("/", (req, res) => {
	res.send("Hello World");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

// Start listen to channel
app.listen(port, () => {
  console.log("Server listening on port " + port);
});