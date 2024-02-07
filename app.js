var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var crud = require("./routes/crud");
const { use } = require("./routes/crud");


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/", crud);

mongoose.connect("mongodb://0.0.0.0:27017/games",{
}).then(function(){
    console.log("Connection with mongoDB database successful")
}).catch(function(err){
    console.log(err);
});
app.use(express.static(__dirname + "/pages"));

//javascript for a route


app.get("/", function(req, res){
    //res.send("here would be the page from the route");
    res.sendFile(path.join(__dirname+"/pages/index.html"));
});


app.listen(3000, function(){
    console.log("Running on Port 3000");
})
