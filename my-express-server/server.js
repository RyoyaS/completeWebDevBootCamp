const express = require("express");
const app = express();
const port =  3000;

app.get("/", function(req,res){
    res.send("<h1>Hello, world</h1>");
})

app.get("/contact", function(req,res){
    res.send("Contact at me:ryouya1998.1.21@gamil.com");
})

app.get("/about", function(req,res){
    res.send("I am programmer and love javascript and Python");
})

app.listen(port, function(){
    console.log("Server Started on port " + port);
});