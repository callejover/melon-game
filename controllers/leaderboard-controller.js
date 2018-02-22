var connection = require('./../config');
module.exports.leaderBoard=function(req,res){
    connection.query('SELECT name, points FROM users ORDER BY points DESC', function (error, results, fields){
      if (error) {
          res.json({
            status:false,
            message:'there are some error with the query'
            })
      }else{
          res.json({
            status:true,
            data:results
        })
      }
    });
}
