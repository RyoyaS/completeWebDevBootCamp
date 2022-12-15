const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Server up and running");
})

app.listen(3000, function(){
    console.log("start listening on port 3000");
});