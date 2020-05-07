var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/cow", function(req, res) {
    res.render("cow");
});

app.get("/popcorn", function(req, res) {
    res.render("popcorn");
});

app.get("/shek", function(req, res) {
    res.render("shek");
});

app.get("/webstar", function(req, res) {
    res.render("webstar");
});

app.get("/webstaradmin", function(req, res) {
    res.render("webstarAdmin");
});

app.get("*", function(req, res) {
    res.render("index");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Profile App Server has started ... ");
});