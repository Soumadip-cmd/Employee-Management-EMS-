const bcrypt = require('bcrypt');
const UserModel = require('../ConnectDB/models/RegistrationSchema');
const jwt = require('jsonwebtoken');

const checkPassword = async (req, res) => {
    const { password, userId } = req.body;

    // Check if user is trying to log in as admin
    if (req.body.email === 'admin@gmail.com' && password === 'admin123') {
        // Admin login logic
        const adminTokenData = {
            id: 'adminId', // A placeholder ID for the admin, adjust as necessary
            email: 'admin@gmail.com',
            role: 'admin'
        };
        const generateAdminToken = jwt.sign(adminTokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
        const cookieOption = {
            httpOnly: true,
            secure: true,
        };
        return res.cookie('token', generateAdminToken, cookieOption).json({
            message: "Admin Login Successfully",
            data: adminTokenData,
            success: true
        });
    }

    // Regular user login logic
    const user = await UserModel.findById(userId);
    if (!user) {
        return res.status(404).json({
            message: "User not found",
            error: true,
        });
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (verifyPassword) {
        try {
            const tokenData = {
                id: user._id,
                email: user.email
            };
            const generateToken = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
            const cookieOption = {
                httpOnly: true,
                secure: true,
            };
            return res.cookie('token', generateToken, cookieOption).json({
                message: "Login Successfully",
                data: user,
                success: true
            });
        } catch (error) {
            console.log("Error in Check Password Controller");
            return res.status(500).json({
                message: error.message || error,
                error: true
            });
        }
    } else {
        return res.json({
            message: "Please Check the Password",
            error: true,
        });
    }
};

module.exports = checkPassword;
