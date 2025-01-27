const express=require("express");
var app = express();
const ejs=require("ejs-mate");
const path = require('path');


//sets view engine to ejs
app.set("view engine", "ejs");
//tells to check static file like css in pblic folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.render("./layouts/boilerplate.ejs");
});

app.listen("8080",(req,res)=>{
    console.log("server is listening");
})