const mongoose = require('mongoose');


const alienScheme = new mongoose.Schema({
    Name: {
        type: String,
        require : true
    },
    Mail: {
        type: String,
        require : true,
        unique: true
    },
    Phone:{
        type: Number,
        require : true,
        unique: true
    },
    Group: {
        type: String,
        require : true,
    },
    Domain: {
        type: String,
        require : true,
    }

},{versionKey:false});
module.exports = mongoose.model('User',alienScheme)