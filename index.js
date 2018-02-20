var express=require("express");
var bodyParser=require('body-parser');

var app = express();

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var pointsController = require('./controllers/points-controller');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Tillåtskod!
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/points', pointsController.points);

app.listen(8012);