const bcrypt = require('bcrypt')
const UserModel = require('../ConnectDB/models/RegistrationSchema')
const jwt = require('jsonwebtoken')
const checkPassword = async (req, res) => {
    const { password, userId } = req.body
    const user = await UserModel.findById(userId);
    const verifyPassword = await bcrypt.compare(password, user.password)
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (verifyPassword) {
        try {
            if (!verifyPassword) {
                return res.json({
                    message: "Please Check the Password",
                    error: true,


                })
            }
            else {
                //Create Token data  for generating in to jwt
                const tokenData = {
                    id: user._id,
                    email: user.email
                }
                const generateToken = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
                const cookieOption = {
                    http: true,
                    secure: true,
                }
                return res.cookie('token', generateToken, cookieOption).json({
                    message: "Login Succesfully",
                    data: user,
                    success: true

                })
            }
        } catch (error) {
            console.log("Error in Check Password Controler")
            return res.status(500).json({
                message: error.message || error,
                error: true
            })
        }
    }

}
module.exports = checkPassword