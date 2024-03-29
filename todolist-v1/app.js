const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const items = ["Buy Food","cook Food","eat"];
const workItems = [];

app.get("/", function(req,res){

    const day = date.getDate();

    res.render("list",{listTitle: day, newListItem: items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
})

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work",newListItem: workItems});
})

app.get("/about", function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("running server on port 3000");
});