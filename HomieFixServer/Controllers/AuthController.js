const userSchema = require("../Models/users");
const adminSchema = require("../Models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);

const signup = async (req, res) => {
    try{
        console.log("req.User Body=", req.body);
        const { name, email, password } = req.body;
        // console.log("before access");
        const user = await userModel.findOne({ email});             // "findOne" - findOne function se hum user ko find kr skte hai, agar user already system me hai toh signup krne ki zarrurat nhi hai 
        // console.log("after access");
        if(user){
            return res.status(400)
            .json({ message: "User already exists, You can login", success: false });
        }
        // console.log("before save");
        const newUser = new userModel({ name, email, password });  // "new userModel" - new userModel se hum new user ko create kr skte hai
        // console.log("after save");
    
        newUser.password = await bcrypt.hash(password, 10);        // "bcrypt.hash" - bcrypt.hash function se hum password ko hash kr skte hai
        await newUser.save();                                      // "save" - save function se hum user ko save kr skte hai
        res.status(201)
            .json({ message: "SignUp successfully", 
                success: true 
        });
    }catch(err){
        console.log("err=", err);
        res.status(500).json({
                message: "Internal Server Error\n" + err,
                success: false
            }
        );
    }
}

const login = async (req, res) => {
    try{
        const {  email, password } = req.body;
        const user = await userModel.findOne({ email});             // "findOne" - findOne function se hum user ko find kr skte hai, agar user already system me hai toh signup krne ki zarrurat nhi hai 
        const errorMSg = "Authentication failed ! Email or Password is incorrect";
        if(!user){
            return res.status(403)
            .json({ message: errorMSg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);  // "bcrypt.compare" - bcrypt.compare function se hum password ko compare kr skte hai
        if(!isPassEqual){
            return res.status(403)
            .json({ message: errorMSg, success: false });
        }
        const jwtToken = jwt.sign({
             email: user.email, _id: user._id }, 
             process.env.JWT_SECRET, 
             { expiresIn: "24h" }
            );                         // "jwt.sign" - jwt.sign function se hum token generate kr skte hai
        
        
        res.status(200)
            .json({ message: "Login successfully", 
                success: true,
                jwtToken,
                email,
                name: user.name
        });
    }catch(err){
        res.status(500)
            .json({
                message: "Error! User Doesn't Exists.",
                success: false
            });
    }

}

const Adminsignup = async (req, res) => {
    try{
        console.log("req.Admin Body=", req.body);
        const { name, email, password, number, city, state, pincode, dob  } = req.body;
        // console.log("before access");
        const admin = await adminModel.findOne({ email});             // "findOne" - findOne function se hum user ko find kr skte hai, agar user already system me hai toh signup krne ki zarrurat nhi hai 
        // console.log("after access");
        if(admin){
            return res.status(400)
            .json({ message: "Admin already exists, You can login", success: false });
        }
        // console.log("before save");
        const newAdmin = new adminModel({ name, email, password, number, city, state, pincode, dob});  // "new userModel" - new userModel se hum new user ko create kr skte hai
        // console.log("after save");
    
        newAdmin.password = await bcrypt.hash(password, 10);        // "bcrypt.hash" - bcrypt.hash function se hum password ko hash kr skte hai
        await newAdmin.save();                                      // "save" - save function se hum user ko save kr skte hai
        res.status(201)
            .json({ message: "SignUp successfully", 
                success: true 
        });
    }catch(err){
        console.log("err=", err);
        res.status(500).json({
                message: "Internal Server Error\n" + err,
                success: false
            }
        );
    }
}

const Adminlogin = async (req, res) => {
    try{
        const {  email, password } = req.body;
        const admin = await adminModel.findOne({ email});             // "findOne" - findOne function se hum user ko find kr skte hai, agar user already system me hai toh signup krne ki zarrurat nhi hai 
        const errorMSg = "Authentication failed ! Email or Password is incorrect";
        if(!admin){ 
            return res.status(403)
            .json({ message: errorMSg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, admin.password);  // "bcrypt.compare" - bcrypt.compare function se hum password ko compare kr skte hai
        if(!isPassEqual){
            return res.status(403)
            .json({ message: errorMSg, success: false });
        }
        const jwtToken = jwt.sign({
             email: admin.email, _id: admin._id }, 
             process.env.JWT_SECRET, 
             { expiresIn: "24h" }
            );                         // "jwt.sign" - jwt.sign function se hum token generate kr skte hai
        
        
        res.status(200)
            .json({ message: "Login successfully", 
                success: true,
                jwtToken,
                email,
                name: admin.name
        });
    }catch(err){
        console.log("err=", err);
        res.status(500)
            .json({
                message: "Error! Admin Doesn't Exists.",
                success: false
            });
    }

}

exports.Adminsignup = Adminsignup;
exports.Adminlogin = Adminlogin;
exports.signup = signup;
exports.login = login;