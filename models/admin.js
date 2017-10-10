const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

mongoose.Promise = global.Promise;


const admin = new Schema({
    email: { type: String, required: true, unique: true, set: toLower },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

function toLower(str) {
    return str.toLowerCase();
}
// hash the password
admin.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
admin.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('admin', admin);