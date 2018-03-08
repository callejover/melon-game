var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'crockett.highstone.biz',
  user     : 'melon',
  password : 'melon123',
  database : 'quizwalk'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {    
    console.log("Error while connecting with database");
}
});
module.exports = connection;



//REST.prototype.