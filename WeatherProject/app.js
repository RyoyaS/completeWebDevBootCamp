const express = require("express");
const https = require("https");

const app = express();

app.get("/",function(req,res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c3d9fc53ceb6aee6bd20a00d8ee3aab5&units=metric"
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
        })
    })

    res.send("Server up and running");
})

app.listen(3000, function(){
    console.log("start listening on port 3000");
});