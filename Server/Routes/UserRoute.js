const express = require('express');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const loginUser = require('../database/model/userSchema.js');
const fetchValidity = require('../middleware/fetchValidity.js');

const router = express.Router()
router.use(express.json())

//JWT-SECRET------------>**
const JWT_SECRET = 'ems-ardent$3%67@Emgineers2024'

router.post('/signupAuth', [
    body('firstname', 'Enter a valid Name').isLength({ min: 3 }),
    body('lastname', 'Enter a valid Name').isLength({ min: 2 }),
    body('email', 'Enter a valid EmailId').isEmail(),
    body('password', 'password must be at least 5 chars long').isLength({ min: 5 }),
], async (req, res) => {

    try {

        let success=false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        const secretpass = await bcrypt.hash(req.body.password, salt)
        const user = await loginUser.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: secretpass,
        })
            //   .then(user => res.json(user))
            .catch((err) => {
                console.log(err)
                res.json({success:success, error: 'Enter a unique Valid Email Id.' });
            })

        const data = {
            id: user.id
        }
        success=true
        var token = jwt.sign(data, JWT_SECRET)
        res.json({success:success, 'Token': token });
        //   console.log(data)
    } catch (error) {
        console.error(error.message)
        res.status(505).json({success:"success", error: 'Internal Server Error!!..' })
    }

})

router.post('/login', [
    body('email', 'Enter a valid Existing EmailId').isEmail(),
    body('password', 'password must be at least 5 chars long').isLength({ min: 5 }),
], async (req, res) => {

    try {

        let success=false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body
        const user = await loginUser.findOne({ email })

        if (!user) {
            console.log('email not valid');
            res.status(404).json({success:success, error: 'Login Failed..' })
        }
        const comparePass = await bcrypt.compare(password, user.password)
        console.log(user.password)
        if (!comparePass) {
            console.log('password not valid');
            res.status(404).json({success:success, error: 'Login Failed..' })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        success=true
        var token = jwt.sign(data, JWT_SECRET)
        res.json({success:success, 'Tag_Number': token });
    } catch (error) {
        console.error(error.message)
        res.status(505).json({ error: 'Internal Server Error!!..' })
    }

})

router.post('/userdetails', fetchValidity, async (req, res) => {
    try {
        let userId = req.user.id;
        const person = await loginUser.findById(userId).select('-password')
        res.send({ person })
    } catch (error) {
        console.error(error.message)
        res.status(505).json({ error: 'Internal Server Error!!..' })
    }
})

module.exports = router

