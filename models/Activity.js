const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActivitySchema = new mongoose.Schema({
    first_name: {
        type: string,
        required: true
    },
    last_name: {
        type: string,
        required: true
    },
    username: {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    }
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;