var mysql      = require('mysql');

var connection = mysql.createConnection({
//   host     : '195.154.182.162',
//   user     : 'u6450508_game',
//   password : 'TeamMelon123456',
//   database : 'u6450508_quiz_walk'
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