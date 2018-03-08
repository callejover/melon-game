var connection = require('./../config');

module.exports.question = function(req,res) {

    connection.query('SELECT * FROM questions', function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      } else {
        
        res.json({
          status: true,
          data: results
        });
      }
    });
}