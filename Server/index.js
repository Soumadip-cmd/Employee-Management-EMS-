const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Connection = require('./database/connection/db');
const UserModel = require('./database/model/User');   
const multer = require('multer');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DeptModel = require('./database/model/Dept');
const SalaryModel = require('./database/model/Salary');
const LeaveModel = require('./database/model/Leave');
const LoginModel = require('./database/model/LoginSchema');

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

//Login and signup Role Based
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get('/', (req, res) => {
    res.json({ "message": "Hello server ... Update succesful" });
});

app.post('/register', (req, res) => {
    const { firstname, lastname, email, password,userType,secretKey } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            LoginModel.create({ firstname, lastname, email,secretKey, password: hash,userType })
                .then(user => res.json("Success"))
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     LoginModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 bcrypt.compare(password, user.password, (err, response) => {
//                     if (response) {
//                         const token = jwt.sign({ email: user.email, userType: user.userType }, "emsSecureKey@2024#", { expiresIn: '1d' });
//                         return res.json({ token: token, status: "Success", role: user.userType ,email:user.email});
//                     } else {
//                         return res.json("The password is incorrect");
//                     }
//                 });
//             } else {
//                 return res.json("No record exists");
//             }
//         })
//         .catch(err => res.json(err));
// });
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    LoginModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const tokenPayload = {
                            email: user.email,
                            userType: user.userType,
                            name: `${user.firstname} ${user.lastname}` // Combine first name and last name
                        };
                        const token = jwt.sign(tokenPayload, "emsSecureKey@2024#", { expiresIn: '1d' });
                        return res.json({ 
                            token: token, 
                            status: "Success", 
                            role: user.userType,
                            name: tokenPayload.name 
                        });
                    } else {
                        return res.json("The password is incorrect");
                    }
                });
            } else {
                return res.json("No record exists");
            }
        })
        .catch(err => res.json(err));
});

const verifyToken = (req, res, next) => {
    const token = req.params.token;
    if (!token) {
        return res.status(401).json({ error: "Token is missing" });
    } else {
        jwt.verify(token, "emsSecureKey@2024#", (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Error verifying token" });
            } else {
                req.user = decoded; // Store decoded user information in request object
                next();
            }
        });
    }
};
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("Token is missing");
    } else {
        jwt.verify(token, "emsSecureKey@2024#", (err, decoded) => {
            if (err) {
                return res.json("Error verifying token");
            } else {
                if (decoded.userType === "admin") {
                    next();
                } else {
                    return res.json("Not admin");
                }
            }
        });
    }
};

app.get('/admin', verifyUser, (req, res) => {
    res.json("Success");
});

// Route to fetch user's personal data
// app.get('/user', verifyUser, (req, res) => {
//     const userEmail = req.user.email; // Get user's email from JWT token

//     // Check if the user's email is stored in the admin panel
//     UserModel.findOne({ user_email: userEmail })
//         .then(admin => {
//             if (admin) {
//                 // If the user is an admin, send a message indicating they are not a regular user
//                 return res.json({ message: "You are not a regular user. Please log in as a regular user to access your data." });
//             } else {
//                 // If the user is not an admin, fetch their personal data from the database using their email
//                 UserModel.findOne({ user_email: userEmail })
//                     .then(user => {
//                         if (!user) {
//                             return res.status(404).json({ error: "User not found" });
//                         }
//                         res.json(user);
//                     })
//                     .catch(err => {
//                         console.error('Error fetching user:', err);
//                         res.status(500).json({ error: 'Failed to fetch user data' });
//                     });
//             }
//         })
//         .catch(err => {
//             console.error('Error checking admin panel:', err);
//             res.status(500).json({ error: 'Failed to check admin panel' });
//         });
// });

// app.get('/user/:token/:name', verifyToken, (req, res) => {
//     const userEmail = req.user.email; // Get user's email from decoded JWT token
//     const userName = req.params.name; // Get user's name from URL parameters
//     // You can use userEmail and userName to fetch user data or perform any other operations
//     res.json({ email: userEmail, name: userName });
// });
app.get('/user/:token/:id', verifyToken, async (req, res) => {
    try {
        // Extract user email from the decoded token
        const userEmail = req.user.email;
        const id = req.params.id; // Get the database ID from URL parameters

        // Fetch user details from the database using the email and ID
        const user = await UserModel.findOne({ _id: id, email: userEmail });

        if (!user) {
            // If user not found, send an error response
            return res.status(404).json({ error: 'User not found' });
        }

        // If user is found, send the user data as a response
        res.json(user);
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//leave application folder creation
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/public/LeaveApplicationDocuments');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});
const leaveApplicationStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/LeaveApplicationDocuments'); // Updated destination path
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

// Connect Multer with Leave Application
const leaveApplicationUpload = multer({
    storage: leaveApplicationStorage
});

// Multer configuration for Staff Photos
const staffPhotoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/StaffPhotos'); // Updated destination path
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

// Connect Multer with Staff Photos
const staffPhotoUpload = multer({
    storage: staffPhotoStorage
});


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);



// get the staff lists

app.get('/staffList', (req, res) => {
    const userEmail = req.query.user_email;
    if (userEmail) {
        // If a user email is provided from any frontend request , find the corresponding user and send only that user's data
        UserModel.findOne({ user_email: userEmail })
            .then(user => {
                if (user) {
                    res.json([user]);
                } else {
                    res.json([]);
                }
            })
            .catch(err => res.json(err));
    } else {
        // If no user email is provided, retrieve the entire list of staff members
        UserModel.find({})
            .then(staffList => res.json(staffList))
            .catch(err => res.json(err));
    }
});





//edit staff 

app.get('/editStaff/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(staffs => res.json(staffs))
        .catch(err => res.json(err))
});



// edit department 


app.get('/editDept/:id', (req, res) => {
    const id = req.params.id;
    DeptModel.findById({ _id: id })
        .then(depts => res.json(depts))
        .catch(err => res.json(err))
});




// Add staff members


app.post('/addStaff', staffPhotoUpload.single('user_docx'), async (req, res) => {
    const userData = req.body;
    console.log(req.file);
    try {
        // Check if a user with similar details already exists
        const existingUser = await UserModel.findOne({
            $or: [
                { user_email: userData.user_email },
                { user_phone: userData.user_phone },
            ]
        });

        if (existingUser) {
            const duplicateFields = [];
            if (existingUser.user_email === userData.user_email) {
                duplicateFields.push('Email');
            }
            if (existingUser.user_phone === userData.user_phone) {
                duplicateFields.push('Phone number');
            }
            const errorMessage = `User with the same ${duplicateFields.join(' and ')} already exists`;
            return res.status(400).json({ error: errorMessage });
        }

        // Create a new staff member
        const newStaff = await UserModel.create({
            ...userData,
            user_docx: req.file.filename // Attach filename to user data
        });

        res.status(201).json({
            message: 'Staff member added successfully',
            newStaff
        });
    } catch (error) {
        console.error('Error adding staff:', error);
        res.status(500).json({ error: 'Failed to add staff member' });
    }
});




// Dashboard count for staff depts,leaveRequest etc


app.get('/dashboardCount', async (req, res) => {
    try {
        const staffcount = await UserModel.countDocuments();
        const deptcount = await DeptModel.countDocuments();
        const leaveRequestCount = await LeaveModel.countDocuments();
        res.json({ staffcount, deptcount,leaveRequestCount });
    } catch (error) {
        console.error('Error fetching counts:', error);
        res.status(500).json({ error: 'Failed to fetch counts' });
    }
});





//new department add 


app.post('/adddept', (req, res) => {
    const userData = req.body;

    // Check if a department with similar details already exists
    DeptModel.findOne({
        $or: [
            { deptName: userData.deptName },
            { deptID: userData.deptID },
        ]
    })
    .then(existingDept => {
        if (existingDept) {
            const duplicateFields = [];

            if (existingDept.deptName === userData.deptName) {
                duplicateFields.push('Department Name');
            }

            if (existingDept.deptID === userData.deptID) {
                duplicateFields.push('Department ID');
            }

            const errorMessage = `Department with the same ${duplicateFields.join(' and ')} already exists`;

            // Send a response with the error message and status code 400 (Bad Request)
            res.status(400).json({ error: errorMessage });
        } else {
            // Create a new department since no duplicate department found
            DeptModel.create(userData)
                .then(newDept => {
                    // Return the newly created department with status code 201 (Created)
                    res.status(201).json(newDept);
                })
                .catch(error => {
                    // Handle any errors during department creation
                    res.status(500).json({ error: 'Failed to add Department' });
                });
        }
    })
    .catch(err => {
        // Handle any internal server errors
        res.status(500).json({ error: 'Internal server error' });
    });
});




// get the department list 


app.get('/manageDepartment', (req, res) => {
    DeptModel.find({})
        .then(depts => res.json(depts))
        .catch(err => res.json(err))
});




// adding the slaary details of the staffs


app.post('/addSalary', (req, res) => {
    const salaryData = req.body;
    SalaryModel.create(salaryData)
        .then(newSalary => {
            // Return the newly created salary with status code 201 (Created)
            res.status(201).json(newSalary);
        })
        .catch(error => {
            // Handle any errors during salary creation
            res.status(500).json({ error: 'Failed to add Salary' });
        });
});



// update the staff details


app.put('/updateStaffs/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body; 

    UserModel.findByIdAndUpdate(id, updatedData, { new: true })
        .then(staff => res.json(staff))
        .catch(err => res.status(500).json({ error: err.message }));
});



//delete the staff data


app.delete('/deleteStaff/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(staff => res.json(staff))
        .catch(err => res.status(500).json({ error: err.message }));
});



//delete department


app.delete('/deletedept/:id', (req, res) => {
    const id = req.params.id;
    DeptModel.findByIdAndDelete({ _id: id })
        .then(dept => res.json(dept))
        .catch(err => res.status(500).json({ error: err.message }));
});

// New Leave Application

app.post("/applyLeave", leaveApplicationUpload.single("leave_docx"), async (req, res) => {
    console.log(req.file);
    const leaveData = req.body;
    console.log(leaveData)
    try {
        const newLeave = await LeaveModel.create({
            ...leaveData,
            leave_docx: req.file.filename
        });
        // Return the newly created leave application with status code 201 (Created)
        res.status(201).json({
            message: "New leave request added successfully",
            newLeave
        });
    } catch (error) {
        // Handle any errors during leave application creation
        console.error("Error adding leave request:", error);
        res.status(500).json({ error: 'Failed to add leave Application' });
    }
});

//Salary Add
app.post('/addSalary', async (req, res) => {
    try {
      // Extract the salary data from the request body
      const salaries = req.body;
    console.log(req.body)
   
      await SalaryModel.insertMany(salaries);
  
      // Respond with success status
      res.status(201).json({ message: 'Salary added successfully' });
    } catch (err) {
      // Handle errors
      console.error('Error adding salary:', err);
      res.status(500).json({ error: 'Failed to add salary' });
    }
  });
app.listen(5050, () => {
    console.log('Server is running on port 5050');
});
