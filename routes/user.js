import Router from 'express'
const userRouter = Router();
import userModel from '../db.js';

userRouter.post('/signin',(req,res)=>{
    res.json({
        message:"singin endpoint"
    })
})
userRouter.post('/signup',(req,res)=>{
    res.json({
        message:"singup endpoint"
    })
})
userRouter.get('/purchases',(req,res)=>{
    res.json({
        message:"All purchases"
    })
})

export default userRouter;