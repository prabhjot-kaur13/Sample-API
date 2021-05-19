var express = require('express');
const app = express();


app.get('/' , function(req, res) {
    res.send("Hii!");
});

app.get('/home' , function(req, res) {
    res.send("Sample API running!");
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});