const getStafffModel = require('../../ConnectDB/models/AddStaffSchema');

const getStaff = async (req, res) => {
    const staffId = req.params.id;

    try {
        if (staffId) {
            // Get a specific staff member by ID
            const staff = await getStafffModel.findById(staffId);
            if (!staff) {
                return res.status(404).json({
                    message: 'Staff not found',
                    data: null
                });
            }
            return res.json({
                message: 'Staff Details',
                data: staff
            });
        } else {
            // Get all staff members
            const allStaff = await getStafffModel.find();
            return res.json({
                message: 'All Staff Details',
                data: allStaff
            });
        }
    } catch (error) {
        console.log("Error in get Staff Controller", error);
        console.error('Error fetching staff', error);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = getStaff;
