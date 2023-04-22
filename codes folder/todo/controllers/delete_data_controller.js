//  delete data controller

const Todo = require('../models/todo')
module.exports.home_delete=function(req,res){
   
    var des=req.query.check
    if (des==null){
        
        return res.redirect('/');
    }
    console.log(des);
    Todo.findByIdAndDelete(des,function(err){
        if(err){
            console.log('error in deletion');
            return ;
        }
        return res.redirect('/');
    });
     
        if (des.length>1){
            for(let i of des){
                console.log(i);
                Todo.findByIdAndDelete(i,function(err){
                    if(err){
                        console.log('error in deletion');
                        return;
                    }
                    
                });
                
        }
      
    }
   
    
    
    }    