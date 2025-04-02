import { Router } from "express";
const adminRoutes = Router();
import adminModel from '../db.js';

adminRoutes.post('/signin',(req,res)=>{
    res.json({
        message:"singin endpoint"
    })
})
adminRoutes.post('/signup',(req,res)=>{
    res.json({
        message:"singup endpoint"
    })
})

adminRoutes.post('/course',(req,res)=>{
    res.json({
        message:"signup courses"
    })
})

adminRoutes.put('/course',(req,res)=>{
    res.json({
        message:"put/change courses"
    })
})

adminRoutes.get('/course/bulk',(req,res)=>{
    res.json({
        message:"bulk courses"
    })
})

export default adminRoutes;