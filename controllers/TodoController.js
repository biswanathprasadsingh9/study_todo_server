const {response}= require('express');
const Todo= require('../models/Todo');

//***INDEX***
const index = (req,res) => {
  Todo.find().sort({_id:-1})
  .then(response=>{
    res.json({
      response:true,
      data:response
    })
  })
  .catch({
  })
}



//***STORE***
const store = (req,res) => {

  Todo.create(req.body)
  .then(response=>{
    res.json({
      response:true,
    })
  })



}

module.exports={index,store};
