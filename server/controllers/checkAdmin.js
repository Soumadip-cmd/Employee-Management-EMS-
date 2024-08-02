


// const UserModel = require('../ConnectDB/models/RegistrationSchema');

// const assignAdminRole = async (req, res) => {
//     const { email } = req.body;

//     // Validate input
//     if (!email) {
//         return res.status(400).json({
//             message: "Email is required",
//             error: true
//         });
//     }

//     try {
//         // Check if the requesting user is an admin
//         if (!req.user) {
//             return res.status(401).json({
//                 message: "User not authenticated",
//                 error: true
//             });
//         }

//         const requestingUser = req.user;
//         if (requestingUser.role !== 'admin') {
//             return res.status(403).json({
//                 message: "You do not have permission to assign admin roles",
//                 error: true
//             });
//         }

//         // Find the user to be promoted
//         const user = await UserModel.findOne({ email });
//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found",
//                 error: true
//             });
//         }

//         // Check if the user is already an admin
//         if (user.role === 'admin') {
//             return res.status(400).json({
//                 message: "User is already an admin",
//                 error: true
//             });
//         }

//         // Update the user's role to admin
//         user.role = 'admin';
//         await user.save();

//         return res.status(200).json({
//             message: "User role updated to admin successfully",
//             success: true
//         });
//     } catch (error) {
//         console.log("Error in Assign Admin Role Controller:", error);
//         return res.status(500).json({
//             message: error.message || error,
//             error: true
//         });
//     }
// };

// module.exports = assignAdminRole;
const UserModel = require('../ConnectDB/models/RegistrationSchema');
const cloudinary = require('cloudinary').v2;

const assignAdminRole = async (req, res) => {
    const { email, name } = req.body;

    // Validate input
    if (!email || !name) {
        return res.status(400).json({
            message: "Email and name are required",
            error: true
        });
    }

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

    try {
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

        // Handle file upload if provided
        if (req.files && req.files.photo) {
            const photo = req.files.photo;

            // Upload the photo to Cloudinary
            const uploadResult = await cloudinary.uploader.upload(photo.tempFilePath);

            // Update the user's photo URL
            user.photoUrl = uploadResult.secure_url;
        }

        // Update the user's role to admin
        user.role = 'admin';
        user.name = name; // Update name if provided
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
