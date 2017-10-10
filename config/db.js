const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    //url: 'mongodb://localhost:27017/allied',
    url: 'mongodb://poonam:poonam30@ds033113.mlab.com:33113/allied',
    secret: crypto,
    db: 'allied'
}