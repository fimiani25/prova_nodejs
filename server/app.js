//add gitpod.io/ a github
//npm i    reinstalla i pacchetti 
//nodemon app.js si aggiorna da solo

//cd ..
//git add *
//git commit -m "ok"
//git push origin master
var express = require('express');

var index = express();

var path = require('path');

index.get('/', function (req, res) {     //req è chi richiede re è la risposta
    res.send("<h1>Hello World</h1>")
});

index.get('/prova', function (req, res) {
    //res.send("prova")
    res.sendFile(path.join(__dirname + '/pagine/prova.html'));
});

index.listen(3000, function () {
    console.log("server attivo sulla porta 3000");
});