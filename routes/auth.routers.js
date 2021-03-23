const Routers = require('express');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = Routers();

router.post (
    '/register',
    [
        check('email', 'incorrect email').isEmail()
    ],
    async (reg, res) => {
    try {
        const errors = validationResult(reg);

        if (errors.isEmpty()) {
            return res.status(400).json(
                {
                    errors: errors.array(),
                    message: 'failed validation'
                }
            )
        }

        const {email, password} = reg.body;

        const candidate = await User.findOne({email});

        if (candidate) {
            return res.status(400).json({message: 'user already exist'})
        }

        const user = new User({email, password});
        await user.save();
        return res.status(201).json({message: 'user is created'})

    } catch (e) {
        res.status(500).json({message: 'sever error'})
    }
})

router.get (
    '/login',
    [
        check('email', 'incorrect email').isEmail()
  
    ],
    async (reg, res) => {
        try {
            const errors = validationResult(reg);
    
            if (errors.isEmpty()) {
                return res.status(400).json(
                    {
                        errors: errors.array(),
                        message: 'invalid login'
                    }
                )
            }
    
            const {email, password} = reg.body;
    
            const user = await User.findOne({email});
    
            if (!user) {
                return res.status(400).json({message: 'user does not exist'})
            }

            const exectPassword = await bcrypt.compare(password, user.password)

            if (!exectPassword) {
                return res.status(400).json({message: 'incorrect password'})
            }

    
        } catch (e) {
            res.status(500).json({message: 'sever error'})
        }
})

module.exports = router;