"use strict"

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.set('views', './nodejswebserver/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./nodejswebserver/public"))

let GuestbookEntry = require("./src/GuestbookEntry.js")


let fs = require("fs");



let id = 0;

let entries = [
    
];

let jsonData;
fs.readFile("./nodejswebserver/data.json", "utf-8", (error, data) => {
    jsonData = JSON.parse(data);

    console.log(data);

    jsonData.forEach(element => {
        entries.push(new GuestbookEntry(element.title, element.content))
    });
    
});

app.listen(5000, () => {

});

app.post("/entry/new", (req, res) => {

    let title = req.body["title"];
    let content = req.body["content"];

    entries.push(new GuestbookEntry(title, content));

    fs.writeFileSync("./nodejswebserver/data.json", JSON.stringify(entries), (error) => {
        console.log("Error while writing file: " + error);
    });
    
    res.redirect("/");

    
});

app.get("/", (req, res) => {
    
    res.redirect("/index");
    
});

app.get("/index", (req, res) => {
    

    
    res.render("index", {"title" : "Mars", entries: entries});
    
});







//routes.routes(app);

/*
let http = require("http");

let server = http.createServer((request,response) => {
    let url = request.url;

    console.log("wurde ausgeführt");
    response.write("Hallo Welt: " + url);
    response.end();

});

server.listen(5000);*/