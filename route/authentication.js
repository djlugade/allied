const express = require('express');
const admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const config = require('../config/db');


const router = express.Router();

//Register Admin
router.post('/admin-register', function(req, res) {
    admin.count({ 'email': req.body.email })
        .then(cnt => {
            if (cnt > 0) {
                return res.json({ success: false, msg: 'Email already Exist' });
            }

            let adminData = new admin({
                'email': req.body.email,
                'username': req.body.username
            });
            adminData.password = adminData.generateHash(req.body.password);
            adminData.save((err) => {
                if (err) {
                    return res.json({ success: false, msg: 'Error in saving form', err });
                }
                res.json({ success: true, msg: 'Data Saved Succefully...' })

            })
        });
});

//Login with email and password
router.post('/login', function(req, res) {
    admin.findOne({ 'email': req.body.email })
        .then((user) => {
            //if (err) res.json({ 'success': false, 'msg': err });

            if (!user) {
                return res.json({ 'success': false, msg: 'Email Id Not Found' });
            } else {
                const password = user.validPassword(req.body.password);
                if (!password) {
                    return res.json({ 'success': false, msg: 'Password not found' });
                } else {
                    let token = jwt.sign({ 'userId': user._id }, config.secret, { expiresIn: '12h' })
                    return res.json({ 'success': true, 'token': token, user: { 'email': user.email } });
                }
            }

        });

});

router.use((req, res, next) => {
    var token = req.headers['token'];
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({ 'success': false, 'msg': err });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
});

// router.get('/admin', (req, res)=>{
//     //res.send(req.decoded);
//     admin.findOne({ '_id': req.decoded.userId }).select( '  ')
// });



module.exports = router;