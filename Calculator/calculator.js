const express = require('express');
const bodyParser = require("body-parser");
const { application } = require('express');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmicalculator", function(req, res){
    var height = req.body.height;
    var weight = req.body.weight;
    var bmi = weight/Math.pow(height,2);

    res.send("your bmi is " + bmi);
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("the result is " + result);
});

app.listen(port, function () {
    console.log("starting server on port " + port);
})