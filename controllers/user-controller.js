var connection = require('./../config');
module.exports.user=function(req,res){
var email = req.query.email;

connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
        res.json({
        status:false,
        message:'there are some error with query'
        })
    } else {
    res.json({
        status: true,
        data: results[0]
    })
    }
});

return;
}