const express = require("express");
const articles = require("../models/articles");
const articlelist = require("../models/articlelist");
const router = express.Router();

//live connect
const mongojs = require('mongojs');
const db = mongojs('mongodb://poonam:poonam30@ds033113.mlab.com:33113/allied', ['articlelist']);

router.post('/articles-name', (req, res)=>{
    let article = new articles({
        'articlename': req.body.articlename
    });

    article.save(err=>{
        if(err) return res.json({ 'success': false, 'msg': err});
        return res.json({ 'success': true})
    });

    
});


router.get('/articlename', (req, res)=>{
   articles.find({}, (err, data)=>{
        if(err) return res.json({ 'success': false, 'msg': err});

        if(!data)  return res.json({ 'success': false, 'msg': 'No data found'});

        return res.json({ 'success': true, 'name':  data });
   });
});

router.post('/article-list', (req, res)=>{
     const existingData ={
                "articlelistname":req.body.articlelistname,
                "iconname":req.body.iconame
            };

            db.articles.save({'articlename':req.body.articlename},{$push:{existingData}});

    //articles.findOne({"articlename":req.body.articlename}, (err, data)=>{
    //     if(err) return res.json({ 'success': false, 'msg': err});

    //     if(data){
           
    //     //     existingData.save(err=>{
    //     //     if(err) return res.json({ 'success': false, 'msg': err});
    //     //     return res.json({ 'success': true})
    //     // });
    //     }
    // });
    // var d = [
    //     {"room": req.body.articlename,
    //         "data":[{
    //             "articlelistname":req.body.articlelistname,
    //             "iconname":req.body.iconame
    //         }]}
    // ]
    // var list = new articlelist({
    //         "articlelistname": req.body.articlelistname,
    //         "iconname": req.body.iconname,
    // });
    // list.save(err=>{
    //     if(err) return res.json({ 'success': false, 'msg': err});
    //     return res.json({ 'success': true})
    // })
});

module.exports = router;

