import { Router } from "express";
const adminRoutes = Router();
import { adminModel } from '../db.js';
import jwt from 'jsonwebtoken';
const JWT_ADMIN_PASSWORD ="hello1234565";


adminRoutes.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    });
    res.json({
        message: "singup succeed"
    })

});

adminRoutes.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await adminModel.findOne({
        email: email,
        password: password
    });

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token,
        })
    } else {
        res.status(403).json({
            message: "incorrect credendial",
        })
    }

    res.json({
        message: "singin succeed"
    })

})

adminRoutes.post('/course', (req, res) => {
    res.json({
        message: "signup courses"
    })
})

adminRoutes.put('/course', (req, res) => {
    res.json({
        message: "put/change courses"
    })
})

adminRoutes.get('/course/bulk', (req, res) => {
    res.json({
        message: "bulk courses"
    })
})

export default adminRoutes;