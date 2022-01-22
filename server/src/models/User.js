const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {required: true, type: String, unique: true},
    password: {required: true, type: String},
}, {
    timestamps: true
});

module.exports = model('User', userSchema);