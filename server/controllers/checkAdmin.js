// const bcrypt = require('bcrypt');
// const UserModel = require('../ConnectDB/models/RegistrationSchema');
// const jwt = require('jsonwebtoken');

// const checkAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     if (email === 'admin@gmail.com' && password === 'admin123') {
//         try {
//             // Fetch the admin user details from the database
//             let admin = await UserModel.findOne({ email });
//             if (!admin) {
//                 // Create a new admin user if not found
//                 const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
//                 admin = new UserModel({
//                     email: email,
//                     password: hashedPassword,
//                     role: 'admin'
//                 });
//                 await admin.save();
//             }
            
//             // Prepare token data
//             const adminTokenData = {
//                 id: admin._id,
//                 email: admin.email,
//                 role: 'admin'
//             };
//             const generateAdminToken = jwt.sign(adminTokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
//             const cookieOption = {
//                 httpOnly: true,
//                 secure: true,
//             };
            
//             // Send the token as a cookie
//             return res.cookie('token', generateAdminToken, cookieOption).json({
//                 message: "Admin Login Successfully",
//                 data: adminTokenData,
//                 success: true
//             });
//         } catch (error) {
//             console.log("Error in Admin Login Controller");
//             return res.status(500).json({
//                 message: error.message || error,
//                 error: true
//             });
//         }
//     } else {
//         return res.status(401).json({
//             message: "Invalid admin credentials",
//             error: true,
//         });
//     }
// };

// module.exports = checkAdmin;


const UserModel = require('../ConnectDB/models/RegistrationSchema');

const assignAdminRole = async (req, res) => {
    const { email } = req.body;

    // Validate input
    if (!email) {
        return res.status(400).json({
            message: "Email is required",
            error: true
        });
    }

    try {
        // Check if the requesting user is an admin
        if (!req.user) {
            return res.status(401).json({
                message: "User not authenticated",
                error: true
            });
        }

        const requestingUser = req.user;
        if (requestingUser.role !== 'admin') {
            return res.status(403).json({
                message: "You do not have permission to assign admin roles",
                error: true
            });
        }

        // Find the user to be promoted
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true
            });
        }

        // Check if the user is already an admin
        if (user.role === 'admin') {
            return res.status(400).json({
                message: "User is already an admin",
                error: true
            });
        }

        // Update the user's role to admin
        user.role = 'admin';
        await user.save();

        return res.status(200).json({
            message: "User role updated to admin successfully",
            success: true
        });
    } catch (error) {
        console.log("Error in Assign Admin Role Controller:", error);
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
};

module.exports = assignAdminRole;
