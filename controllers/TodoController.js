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



//***VIEW***
const view = (req,res) => {

  // Todo.findById(req.params.id)
  // .then(response=>{
  //   res.json({
  //     response:true,
  //     data:response
  //   })
  // })

  Todo.findById(req.params.id,(err,doc)=>{
    if(!err){
      res.json({
        response:true,
        data:doc
      })
    }else{
      res.json({
          response:false
      })
    }
  })

}


//***UPDATE***
const update = (req,res) => {

  let updatedData = {
    name : req.body.name,
    subject : req.body.subject,
    gender : req.body.gender,
    about : req.body.about,
  }

  Todo.findByIdAndUpdate(req.body._id, {$set: updatedData})
  .then(response=>{
    res.json({
      response:true,
    })
  })

  //
  // console.log(req.body)
  // Todo.update(req.body)
  // .then(response=>{
  //   res.json({
  //     response:true
  //   })
  // })
}


//***DELETE***
const removeid =(req,res) => {
  Todo.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(!err){
      res.json({
        response:true,
        data:doc
      })
    }else{
      res.json({
          response:false
      })
    }
  })

}


module.exports={index,store,view,update,removeid};
