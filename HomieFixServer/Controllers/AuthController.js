const userSchema = require("../Models/users");
const adminSchema = require("../Models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);

const signup = async (req, res) => {
    try {
        console.log("req.User Body=", req.body);
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email }); 
        if (user) {
            return res.status(400).json({ message: "User already exists, You can login", success: false });
        }
        const newUser = new userModel({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10); 
        await newUser.save();
        res.status(201).json({ message: "SignUp successfully", success: true });
    } catch (err) {
        console.log("err=", err);
        res.status(500).json({ message: "Internal Server Error\n" + err, success: false });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }); 
        const errorMSg = "Authentication failed ! Email or Password is incorrect";
        if (!user) {
            return res.status(403).json({ message: errorMSg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMSg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );
        res.status(200).json({
            message: "Login successfully",
            success: true,
            jwtToken,
            email,
            name: user.name,
        });
    } catch (err) {
        res.status(500).json({ message: "Error! User Doesn't Exists.", success: false });
    }
};

const Adminsignup = async (req, res) => {
    try {
        console.log("req.Admin Body=", req.body);
        const { name, email, password, number, city, state, pincode, dob } = req.body;
        const admin = await adminModel.findOne({ email }); 
        if (admin) {
            return res.status(400).json({ message: "Admin already exists, You can login", success: false });
        }
        const newAdmin = new adminModel({ name, email, password, number, city, state, pincode, dob });
        newAdmin.password = await bcrypt.hash(password, 10); 
        await newAdmin.save();
        res.status(201).json({ message: "SignUp successfully", success: true });
    } catch (err) {
        console.log("err=", err);
        res.status(500).json({ message: "Internal Server Error\n" + err, success: false });
    }
};

const Adminlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await adminModel.findOne({ email }); 
        const errorMSg = "Authentication failed ! Email or Password is incorrect";
        if (!admin) {
            return res.status(403).json({ message: errorMSg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, admin.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMSg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: admin.email, _id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );
        res.status(200).json({
            message: "Login successfully",
            success: true,
            jwtToken,
            email,
            name: admin.name,
        });
    } catch (err) {
        console.log("err=", err);
        res.status(500).json({ message: "Error! Admin Doesn't Exists.", success: false });
    }
};

// Get Admin Profile - New Function Added
const getAdminProfile = async (req, res) => {
    try {
        const adminId = req.user._id; // Use `req.user` set by verifyToken middleware
        const admin = await adminModel.findById(adminId); // Find admin by ID

        if (!admin) {
            return res.status(404).json({ message: "Admin not found", success: false });
        }

        // Send only selected details
        res.status(200).json({
            message: "Profile fetched successfully",
            success: true,
            data: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                city: admin.city,
                state: admin.state,
                pincode: admin.pincode,
            },
        });
    } catch (err) {
        console.log("err=", err);
        res.status(500).json({ message: "Internal Server Error\n" + err, success: false });
    }
};

// Exports
exports.Adminsignup = Adminsignup;
exports.Adminlogin = Adminlogin;
exports.signup = signup;
exports.login = login;
exports.getAdminProfile = getAdminProfile; // Exported the new function
