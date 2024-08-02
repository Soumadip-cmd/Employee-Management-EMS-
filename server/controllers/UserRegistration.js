// const UserModel = require('../ConnectDB/models/RegistrationSchema');
// const bcrypt = require('bcrypt');

// const UserRegistration = async (req, res) => {
//   try {
//     const { email, password, role, confirmpassword } = req.body;

//     // Check if the email already exists
//     const checkEmail = await UserModel.findOne({ email });
//     if (checkEmail) {
//       return res.json({
//         message: "Email already exists. Please use a different email.",
//         error: true,
//       });
//     }

//     // Check if password and confirm password match
//     if (password !== confirmpassword) {
//       return res.json({
//         message: "Passwords do not match.",
//         error: true,
//       });
//     }

//     // Check if the role is admin
//     if (role === 'admin') {
//       return res.json({
//         message: "Admin can't register. Only users can register.",
//         error: true,
//       });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(password, salt);

//     // Create payload without confirmpassword
//     const payload = {
//       email,
//       role,
//       password: hashPassword,
//     };

//     // Save new user
//     const newUser = new UserModel(payload);
//     const newUserSave = await newUser.save();

//     return res.json({
//       message: "User registered successfully.",
//       success: true,
//       data: newUserSave,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message || error,
//       error: true,
//     });
//   }
// };

// module.exports = UserRegistration;
const UserModel = require('../ConnectDB/models/RegistrationSchema');
const bcrypt = require('bcrypt');

const UserRegistration = async (req, res) => {
  try {
    const { email, password, role, confirmPassword } = req.body; // Corrected to match the provided JSON

    // Check if the email already exists
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ // Use 400 for bad request errors
        message: "Email already exists. Please use a different email.",
        error: true,
      });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ // Use 400 for bad request errors
        message: "Passwords do not match.",
        error: true,
      });
    }

    // Check if the role is admin
    if (role === 'admin') {
      return res.status(403).json({ // Use 403 for forbidden access
        message: "Admin role is not allowed during registration.",
        error: true,
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create payload without confirmPassword
    const payload = {
      email,
      role,
      password: hashPassword,
    };

    // Save new user
    const newUser = new UserModel(payload);
    const newUserSave = await newUser.save();

    return res.status(201).json({ // Use 201 for successful creation
      message: "User registered successfully.",
      success: true,
      data: newUserSave,
    });
  } catch (error) {
    console.error("Error in User Registration:", error); // Improved error logging
    return res.status(500).json({
      message: error.message || "An unexpected error occurred.",
      error: true,
    });
  }
};

module.exports = UserRegistration;
