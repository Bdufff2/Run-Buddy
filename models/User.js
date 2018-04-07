const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    first_name: {
        type: string,
        required: true
    },
    last_name: {
        type: string,
        required: true
    },
    image: {
        // come back to this
        type: image
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

const User = mongoose.model('User', UserSchema);

module.exports = User;