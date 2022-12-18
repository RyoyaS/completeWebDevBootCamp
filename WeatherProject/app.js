const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    const query = req.body.cityName;
    const apiKey = "c3d9fc53ceb6aee6bd20a00d8ee3aab5";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";

            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The temperature in London is " + temp + " degrees Celsius.</h1>");
            res.write("<img src="+ imageURL +">");
            res.send();
        })
    })
})

app.listen(3000, function(){
    console.log("start listening on port 3000");
});