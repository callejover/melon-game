var connection = require('./../config');
module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today
    }
//prevent to create faulty users 
    if (!users.name || !users.email || !users.password) {
        res.json({
            status: false
        });
        return;
    }


    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {         
        res.json({
            status:false,
            message:'there are some error with query'
        }) 
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}