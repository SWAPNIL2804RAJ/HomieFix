const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth) {
        return res.status(401)
            .json({ message: "Unauthorized", success: false });             // "401" - 401 status code ka matlab hai "Unauthorized" - unauthorized user hai
    }
    try{
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);           // "jwt.verify" - jwt.verify function se hum token ko verify kr skte hai, if wo secret key se match krta hai toh token valid hai mtlb right user hai ! 
        req.user = decoded;                                                  // "decoded" - decoded token ko hum res.user me store kr skte hai
        next();
    }catch(err){
        return res.status(403)
            .json({ message: "Unauthorized, JWT Token Wroung/Expired"});
    }
}

module.exports =  ensureAuthenticated;