const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

//live connect
const mongojs = require('mongojs');
const db = mongojs('mongodb://poonam:poonam30@ds033113.mlab.com:33113/allied', ['userdetails']);

//User articles details save
router.post('/user-details', (req, res) => {
    db.userdetail.save({
        "UserDate": req.body.userDate,
        "Fromlocation": req.body.fromLocation,
        "Droplocation": req.body.dropLocation,
        "Pickupfloor": req.body.pickupFloor,
        "Dropfloor": req.body.dropFloor,
        "ElevatorPickupLoc": req.body.elevatorPickupLoc,
        "ElevatorDropLoc": req.body.elevatorDropLoc,
        "Relocation": req.body.relocation,
        "Bhk": req.body.bhk
    }, (err) => {
        if (err) return res.json({ 'success': false, 'msg': `error ${err.message}` });
        return res.json({ 'success': true });
    });

});

module.exports = router;