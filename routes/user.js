import Router from 'express'
const userRouter = Router();
import { userModel } from '../db.js';
import jwt from 'jsonwebtoken';
const JWT_USER_PASSWORD ="hello1234";

userRouter.post('/signin', async (req, res) => {
    const {email , password } = req.body;

    const user =await userModel.findOne({
        email:email,
        password:password
    });

    if(user){
        const token = jwt.sign({
            id: user._id
        },JWT_USER_PASSWORD);

        res.json({
            token: token,
        })
    }else{
        res.status(403).json({
            message: "incorrect credendial",
        })
    }

    res.json({
        message: "singin succeed"
    })
})
userRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    await userModel.create({
        email,
        password,
        firstName,
        lastName
    });
    res.json({
        message: "singup succeed"
    })
})
userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "All purchases"
    })
})

export default userRouter;