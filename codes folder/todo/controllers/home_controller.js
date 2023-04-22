//  home controller


const db=require('../config/mongoose');
const Todo=require('../models/todo');

module.exports.home=function(req,res){
    Todo.find({},function(err,todo){
        if (err){
            console.log('there is error in fetching');
        }

        return res.render('home',{title:'To_Do',to_do:todo});

    }
    )}
 