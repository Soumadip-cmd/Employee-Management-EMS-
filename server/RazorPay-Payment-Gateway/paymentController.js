const Razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config(); // To load environment variables from .env file
const EmployeeModel = require('../ConnectDB/models/AddStaffSchema');

const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY
});

const createSalaryPayment = async (req, res) => {
    try {
        const { employeeId, totalamount, name, email, contact } = req.body;

        // Check if employee ID exists
        const employee = await EmployeeModel.findById(employeeId);
        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        const paymentAmount = totalamount * 100; // Convert to smallest currency unit (paise)

        const options = {
            amount: paymentAmount,
            currency: 'INR',
            receipt: `salary_${employeeId}`,
            notes: {
                employeeId,
                name,
                email
            }
        };

        razorpayInstance.orders.create(options, (err, order) => {
            if (!err) {
                res.status(200).json({
                    success: true,
                    message: 'Salary payment order created successfully',
                    order_id: order.id,
                    amount: paymentAmount,
                    key_id: RAZORPAY_ID_KEY,
                    name,
                    email,
                    contact
                });
            } else {
                res.status(400).json({ success: false, message: 'Error creating order', error: err });
            }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
};

module.exports = {
    createSalaryPayment
};
