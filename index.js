import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import courseRouter from './routes/course.js';
import userRouter from './routes/user.js';
import adminRoutes from './routes/admin.js';

app.use(express.json());

app.use('/course',courseRouter);
app.use('/user',userRouter);
app.use('/admin',adminRoutes)

async function main(){
    await mongoose.connect(process.env.MONGO_URL).then(console.log('mongoo')
    );
    app.listen(process.env.PORT,()=>{
        console.log("I am in!",process.env.PORT)
    })
}

main();
