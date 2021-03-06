const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toLower = require('./common-function');

mongoose.Promise = global.Promise;


const articles = new Schema({
    articlename: { type: String, required: true, unique: true, set: toLower },
    articleiconname: { type: String, required: true, set: toLower },
    title: { type: String, set: toLower }
});



module.exports = mongoose.model('articles', articles);