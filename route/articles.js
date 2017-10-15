const express = require("express");
const articles = require("../models/articles");
const router = express.Router();

//live connect
const mongojs = require('mongojs');
const db = mongojs('mongodb://poonam:poonam30@ds033113.mlab.com:33113/allied', ['articles']);

//save Article name
router.post('/articles-name', (req, res) => {
    let article = new articles({
        'articlename': req.body.articlename,
        'articleiconname': req.body.articleiconname,
        'title': req.body.title
    });

    article.save((err) => {
        if (err) return res.json({ 'success': false, 'msg': "Error", err });
        return res.json({ 'success': true })
    });


});

//get Article name
router.get('/articlename', (req, res) => {
    db.articles.find({}).toArray((err, data) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!data) return res.json({ 'success': false, 'msg': 'No data found' });
        return res.json({ 'success': true, 'name': data });
    });
});

//save Article list name
router.post('/article-list', (req, res) => {
    db.articleslist.save({
        "articlename": req.body.articlename,
        "articlelistname": req.body.articlelistname,
        "iconname": req.body.iconname
    }, (err) => {
        if (err) return res.json({ 'success': false, 'msg': `error ${err.message}` });
        return res.json({ 'success': true });
    });

});

// reference push articles
// router.post('/article-list', (req, res) => {
//     db.articles.update({ "articlename": req.body.articlename }, {
//         "$push": {
//             "list": {
//                 "articlelistname": req.body.articlelistname,
//                 "iconname": req.body.iconname
//             }
//         }
//     }, (err) => {
//         if (err) return res.json({ 'success': false, 'msg': `error ${err.message}` });
//         return res.json({ 'success': true });
//     });

// });

//get Article list name
router.get('/alllist', (req, res) => {
    db.articleslist.find({}, (err, data) => {
        if (err) return res.json({ 'success': false, 'msg': err });
        if (!data) return res.json({ 'success': false, 'msg': 'No data found' });
        return res.json({ 'success': true, 'name': data });
    });
});

// filter Article list name
// router.get('/alllist:listname', (req, res) => {
//     db.articles.find({ 'articlename': listname }, {}, (err, data) => {
//         if (err) return res.json({ 'success': false, 'msg': err });
//         if (!data) return res.json({ 'success': false, 'msg': 'No data found' });
//         return res.json({ 'success': true, 'name': data });
//     });
// });

module.exports = router;