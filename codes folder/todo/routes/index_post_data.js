//  route for post data

const express=require('express');
const router=express.Router();
const post_data_controller=require('../controllers/post_data_controller');


router.post('/create-todo',post_data_controller.home_post);

module.exports=router;
