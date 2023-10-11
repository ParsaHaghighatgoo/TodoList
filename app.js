//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js")

const app = express();

var items = [];
var workItems = [];

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//let variables
//

app.get("/", function(req , res){
    
    let day = date.getDate();
    
    res.render("list", {listTitle: day, newItem: items});

});

app.post("/", function(req,res){
    
    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work", function(req, res){
    res.render("list",{listTitle: "Work List", newItem: workItems});
});

app.get("/about", function(req,res){
    res.render("about");
});


app.listen(process.env.PORT || 3000 , function(){
    console.log('Server is running on port 3000');
});

