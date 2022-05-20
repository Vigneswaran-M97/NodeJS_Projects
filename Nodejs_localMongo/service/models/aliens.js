const mongoose = require('mongoose');

const alienScheme = new mongoose.Schema({
    Name: {
        type: 'string',
        require : true
    },
    Tech: {
        type: 'string',
        require : true
    },
    Sub:{
        type: 'string',
        require : true,
        default: false
    }
});

module.exports = mongoose.model('Alien',alienScheme)