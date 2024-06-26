const AddDepartment = require('../../ConnectDB/models/AddDepartment');

const getDepartment = async (req, res) => {
    const deptreq = req.params.id;

    try {
        if (deptreq) {
          
            const dept = await AddDepartment.findById(deptreq);
            if (!dept) {
                return res.status(404).json({ error: 'Department not found' });
            }   
            return res.json({
                message:"This Department Found",
                data:dept
            });
        } else {
            // Get all departments
            const allDepts = await AddDepartment.find();
            return res.json({
                message:"All Departments Found",
                data:allDepts
            });
        }
    } catch (error) {
        console.log("Error in get department Controller",error)
        console.error('Error fetching departments', error);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = getDepartment;
