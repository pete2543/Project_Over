const express = require('express');
const studentRoute = express.Router();
// Student model
let StudentModel = require('../models/Student');

// Get all data

module.exports = studentRoute;

studentRoute.get('/',async(req,res,next)=>{
    StudentModel.find((error,data)=>{
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});
// Create student data
studentRoute.post('/create-student',async(req,res,next)=>{
    StudentModel.findById(req.params.id,(error,data)=>{
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});
// Edit student data
studentRoute.get('/edit-student/:id',async(req,res,next)=>{
    StudentModel.findById(req.params.id,(error,data)=>{
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

// Update student data
studentRoute.put('/update-student/:id',async(req,res,next)=>{
    StudentModel.findByIdAndUpdate(req.params.id,{$set:req.body}, (error, data) =>
        {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Student successfully updated');
        }
    })
});
// Delete student data
studentRoute.delete('/delete-student/:id',async(req,res,next)=>{
    StudentModel.findByIdAndDelete(req.params.id,(error, data) =>
        {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});