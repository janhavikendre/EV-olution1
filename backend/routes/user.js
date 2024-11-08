const { Router } = require('express');
const { z } = require('zod');
const { userModel } = require('../db');
const UserRouter = Router();
const bcrypt = require('bcryptjs')
const { usermiddleware } = require('../middleware/usermiddleware'); 

const jwt = require('jsonwebtoken')

UserRouter.post('/signup', async (req, res) => {
    try {
        const requiredbody = z.object({
            email: z.string().min(3).max(100).email(),
            password: z.string().min(1).max(30),
            firstname: z.string().min(3).max(30),
            lastname: z.string().min(3).max(100),
            image: z.string().optional()
        })

        const parsedbody = await requiredbody.safeParse(req.body);
        const Jwt_user_secrte = "kahi"
        if (!parsedbody.success) {
            res.status(404).json({
                message: "You have entered wrong input",
                error: parsedbody.error
            })
            return
        }

        const { email, password, firstname, lastname, image } = req.body;
        const hashedpassword = await bcrypt.hash(password, 5)

        const user = await userModel.create({
            email,
            password: hashedpassword,
            firstname,
            lastname,
            image
        })

        const token = await jwt.sign({
            id: user._id
        }, Jwt_user_secrte)

        res.status(200).json({
            alert: "Password verified successfully",
            message: 'You have logged in',
            user,
            id: user._id,
            token: token,
        })

    } catch (e) {
        console.error(e)
    }
})

UserRouter.put("/signin", async (req, res) => {
    try {
        const requiredbody = z.object({
            email: z.string().min(3).max(100).email(),
            password: z.string().min(3).max(30)
        })

        const parsedbody = requiredbody.safeParse(req.body);

        if (!parsedbody.success) {
            res.status(404).json({
                message: "You have entered wrong input",
                error: parsedbody.error
            })
            return

        }

        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        const correctpassword = await bcrypt.compare(password, user.password);
        if (!correctpassword) {
            res.status(404).json({
                message: `You have entered wrong password ${password}`,
            })

        } else {

            const token = await jwt.sign({
                id: user._id
            }, Jwt_user_secrte)

            await ActivityLogModel.create({
                userId: user._id,
                action: 'login',
                details: `User logged in at ${new Date().toLocaleString()}`,
            })

            res.status(200).json({
                alert: "Password verified successfully",
                message: 'You have logged in',
                user,
                id: user._id,
                token: token,
            })
        }

    } catch (e) {
        console.error(e)
    }
})

UserRouter.put("/update", usermiddleware, async function (req, res) {
    try {
        const requiredbody = z.object({
            email: z.string().min(3).max(100).email().optional(),
            password: z.string().min(1).max(30).optional(),
            firstname: z.string().min(3).max(30).optional(),
            lastname: z.string().min(3).max(100).optional(),
            image: z.string().optional()
        })

        const parsedbody = requiredbody.safeParse(req.body);
        if (!parsedbody.success) {
            res.status(400).json({
                message: "You have entered something wrong",
                error: parsedbody.error
            })
            return
        }
        const userid = req.userId
        const { email, firstname, lastname, image, password } = req.body;

        const UpdateData = {};
        if (email) {
            UpdateData.email = email
        }
        if (firstname) {
            UpdateData.firstname = firstname
        }
        if (lastname) {
            UpdateData.lastname = lastname
        }
        if (image) {
            UpdateData.image = image
        }
        if (password) {
            const hashedpassword = await bcrypt.hash(password, 5);
            UpdateData.password = hashedpassword
        }

        const updatedbody = await userModel.findByIdAndUpdate(
            userid
            , UpdateData,
            {
                new: true
            })


        if (updatedbody) {
            res.status(200).json({
                message: "User Updated successfully",
                updatedbody: updatedbody
            })
        } else {
            res.status(400).json({
                message: "User not updated"
            })
        }
    } catch (e) {
        console.error(e)
    }
})

UserRouter.delete('/delete', usermiddleware, async function (req, res) {
    try {
        const requiredbody = z.object({
            email: z.string().min(3).max(100).email().optional(),
        })

        const parsedbody = requiredbody.safeParse(req.body);
        if (!parsedbody.success) {
            res.status(400).json({
                message: "You have entered something wrong",
                error: parsedbody.error
            })
            return
        }
        const userId = req.userId
        const { email } = req.body;

        const delteuser = await userModel.findByIdAndDelete({
            _id: userId,
            email: email
        });

        if (delteuser) {
            res.status(200).json({
                message: "User delted successfully",
                delteuser: delteuser
            })
        } else {
            res.status(404).json({
                message: "something error occured",
            })
        }
    } catch (e) {
        console.error(e)
    }
})





module.exports = {
    UserRouter
}