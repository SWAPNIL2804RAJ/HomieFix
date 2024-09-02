// const { ensureAuthenticated } = require('../Middlewares/Auth');
// const router = require('express').Router();

// router.get('/', ensureAuthenticated,  (req,res) => {         //ensureAuthenticated middleware ko use krne k liye
//     console.log("-----Logged in User Data : ", req.user);
//     res.status(200).json([
//         {
//             name : "mobile",
//             price : 10000
//         },
//         {
//             name : "laptop",
//             price : 50000
//         }
//     ])
// })

// module.exports = router;