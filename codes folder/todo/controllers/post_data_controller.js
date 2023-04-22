//   post data controller 

const Todo=require('../models/todo');
module.exports.home_post=function(req,res){
    var s=req.body.date;
    var y=s.slice(0,4);
    var m=s.slice(5,7);
    var d=s.slice(8,10);
 
    Todo.create({
        des:req.body.des,
        cat:req.body.cat,
        date:m+'/'+d+'/'+y
    }, function(err,newTodo){
        if(err){
            console.log('error in creating todo');
            return;
        }

      
    return res.redirect('/');

    });

 
};

 