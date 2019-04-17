const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const USER_ROUTES = require("./api/routes/user");

app.use(bodyParser.urlencoded({
parameterLimit: 100000,
limit: '50mb',
extended: true
}));

app.use(bodyParser.json());


// Routes which should handle requests
app.use("/user", USER_ROUTES);


app.use(bodyParser.json());
global.__root = __dirname + '/'; 

app.use('/', function(req, res)
{
	res.statusCode = 200;//send the appropriate status code
	res.json(
    {
      status:"false",
      message:"Welcome to API...", 
      data:{}
    })
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;