const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {required: true, type: String, unique: true, trim: true},
    password: {required: true, type: String},
    email: {required: true, type: String, unique: true},
}, {
    timestamps: true
});

module.exports = model('User', userSchema);