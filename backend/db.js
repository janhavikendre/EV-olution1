const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const userSchema = new mongoose.Schema({
    email: {type: String, index: true, unique: true },
    password: String,
    firstname: String,
    lastname: String,
    image:  {type: String, required: false}
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

module.exports = {
    userModel
}