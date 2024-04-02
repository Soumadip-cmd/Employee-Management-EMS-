const express = require('express')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'ems-ardent$3%67@Emgineers2024'

const fetchValidity = (req, res, next) => {

    try {
        const token = req.header('Auth-token')
        if (!token) {
            res.status(404).json({ error: 'Invalid Token' })
        }
        const verification = jwt.verify(token, JWT_SECRET)
        req.user = verification.user

        next()
    } catch (error) {
        console.error(error.message)
        res.status(505).json({ error: 'Internal Server Error!!..' })
    }
}

module.exports = fetchValidity