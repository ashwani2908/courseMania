import express from 'express';
const app = express();
import courseRouter from './routes/course.js';
import userRouter from './routes/user.js';
import adminRoutes from './routes/admin.js';


app.use('/course',courseRouter);
app.use('/user',userRouter);
app.use('/admin',adminRoutes)
app.listen(5050,()=>{
    console.log("I am in!")
})