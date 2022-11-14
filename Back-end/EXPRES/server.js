const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
    
app.post('/', urlencodedParser, (req, res) => {
    console.log('First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
    res.send(req.body);
});
    
app.listen(3000);
