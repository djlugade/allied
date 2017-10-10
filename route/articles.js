const express = require("express");
const articles = require("../models/articles");
//const articlelist = require("../models/articlelist");
const router = express.Router();

//live connect
const mongojs = require('mongojs');
const db = mongojs('mongodb://poonam:poonam30@ds033113.mlab.com:33113/allied', ['articles']);

router.post('/articles-name', (req, res) => {
    let article = new articles({
        'articlename': req.body.articlename
    });

    article.save((err) => {
        if (err) return res.json({ 'success': false, 'msg': "Error", err });
        return res.json({ 'success': true })
    });


});


router.get('/articlename', (req, res) => {
    articles.find({}, (err, data) => {
        if (err) return res.json({ 'success': false, 'msg': err });

        if (!data) return res.json({ 'success': false, 'msg': 'No data found' });
        return res.json({ 'success': true, 'name': data });
    });
});

router.post('/article-list', (req, res) => {
    // const list = {
    //     "articlelistname": req.body.articlelistname,
    //     "iconname": req.body.iconame
    // };
    // db.articles.update({ 'articlename': req.body.articlename }, {
    //     "$set": {
    //         "articlename.$list": list
    //     }
    // });

    db.articles.update({
            "articlename": req.body.articlename
        }, {
            "$push": {
                "list": {
                    "articlelistname": req.body.articlelistname,
                    "iconname": req.body.iconame
                }
            }
        })
        //  (err) => {
        //     if (err) return res.json({ 'success': false, 'msg': `error ${err.message}` });

    //     return res.json({ 'success': true });
    // });

    // db.articles.findOne({ 'articlename': req.body.articlename }, (err, data) => {
    //     if (err) return res.json({ 'success': false, 'msg': `error ${err.message}` });

    //     if (!data) return res.json({ 'success': false, 'msg': `Data ${err.message}` });

    //     const list = {
    //         "articlelistname": req.body.articlelistname,
    //         "iconname": req.body.iconame
    //     };

    //     db.articles.save({ $push: { list: list } });
    //     return res.json({ 'success': true, 'msg': data });

    // });
});

module.exports = router;