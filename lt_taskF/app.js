const express = require('express')
const app = express()
app.use(express.static('public'))


app.set('views engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index.ejs");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});