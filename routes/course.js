import Router from 'express'
const courseRouter = Router();
import courseModel from '../db.js'

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}

courseRouter.use(timeLog);



courseRouter.post('/purchase',(req,res)=>{
    res.json({
        message:"user want to purchase"
    })
})
courseRouter.get("/preview",(req,res)=>{
    res.json({
        massege:"All course are here"
    })
})

export default courseRouter;