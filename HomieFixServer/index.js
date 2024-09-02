require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');  // "request body -jisko middleware m add krna hai"library hai jo info user s fetchh krnege uske liye
const cors = require('cors');                 // "cross origin resource sharing" - ek security feature hai jo server s request ko allow krta hai, in short agar user 5000 port par hai toh 3000 port s request nhi bhej skta
const app = express();
require('./Models/db');                   // "db.js file ko require krne k liye" - db.js file ko require krne k liye
const PORT = process.env.PORT || 8000;
const AuthRouter = require('./Routes/AuthRouter');  // "AuthRouter.js file ko require krne k liye" - AuthRouter.js file ko require krne k liye
//const ProductRouter = require('./Routes/ProductRouter');  // "ProductRouter.js file ko require krne k liye" - ProductRouter.js file ko require krne k liye

// Routes
app.get('/', (req, res) => {            // "get request" - get request
  res.send('Hello, World! Hello Swpanil');
});

// Middleware
app.use(cors());              // "cross origin resource sharing" - ek security feature hai jo server s request ko allow krta hai
app.use(bodyParser.json());    // "json data ko parse krne k liye" - json data ko parse krne k liye
app.use(express.json());      // "json data ko parse krne k liye" - json data ko parse krne k liye
app.use('/auth', AuthRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
