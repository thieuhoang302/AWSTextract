const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config()

require('./model/config');
const routes = require('./route/route');

app.use(
    cors({
      origin: '*',
      methods: "GET,POST,PUT,PATCH,DELETE",
    })
  );
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/',routes);

const server = app.listen(8000,function(){
    const host =  server.address().address;
    const port = server.address().port;
    console.log("Start server at http://localhost%s", host, port);
});





