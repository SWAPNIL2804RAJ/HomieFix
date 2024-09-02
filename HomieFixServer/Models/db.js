require('dotenv').config();
const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;
// console.log("mongo uri=", mongo_url);
mongoose.connect(mongo_url)
    .then(() => {
        console.log('Connected to MongoDB.....')
    }).catch((err) => {
        console.error('Could not connect to MongoDB', err)
    }); 
//V2bRMGeMLSzC1zWO 
 