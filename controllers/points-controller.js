var connection = require('./../config');
module.exports.points=function(req,res){
    var email=req.body.email;
    var points=req.body.points;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        connection.query('UPDATE users SET points = points + ? WHERE email = ?', [points, email],  function (error, results, fields) {
        if (error) {         
            res.json({
                status:false,
                message:'there are some error with query'
            }) 
        }else{
          res.json({
            status:true,
            data:results,
            message:'points added succesfully'
        })
      } 
    });
      }    
  });
}