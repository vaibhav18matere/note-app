const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('task', Task)