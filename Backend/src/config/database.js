const mongoose = require('mongoose');
require('dotenv').config();

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(console.log("Db connected successfully"))
}

module.exports = connectToDB