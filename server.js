var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiRoutes = require(path.join(__dirname, "FriendFinder","app","routing","apiRoutes.js"));
var htmlRoutes = require(path.join(__dirname, "FriendFinder","app","routing","apiRoutes.js"));



app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"FriendFinder","app","public", "home.html"));
});

app.get("/getsurvey", (req,res) => {
    res.sendFile(path.join(__dirname,"FriendFinder","app","public", "survey.html"));
});


app.get("/favicon.ico", (req,res) =>{
    return;
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    interval = setInterval(clearTables, 1000 * 30);
});