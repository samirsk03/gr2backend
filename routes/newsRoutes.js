const express = require('express');
const {allNews , createNews, deleteNews} = require('../controllers/newsController');


const router = express.Router();

router.post('/create', createNews)  //create a new news
router.post('/delete/:newsId', deleteNews)  //delete single news
router.get('/allnews', allNews);  //fetch all news

module.exports = router;
