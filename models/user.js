const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('user', userSchema);