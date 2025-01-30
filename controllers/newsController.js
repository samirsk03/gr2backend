const { json } = require('body-parser');
const News = require('../models/newsModel');


// create news 
// ****need to upload img 
exports.createNews = async (req, res) => {
    try { 
        const news = new News(req.body);
        await news.save();
        res.status(201).json({ message: 'Contact submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// fetch all news
exports.allNews = async (req, res) => {
    try{
        const news = await News.find().sort({createdAt: -1});
        res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ error : error.message})
    };
};

// delete news by id
exports.deleteNews = async (req, res) => {
  try{
    const {newsId} = req.params;

    const news = await News.findByIdAndDelete(newsId);
    if(!news) {
      return res.status(404).json({message: 'news not found'});
    } else res.status(200).json({message: 'news deleted successfully'});
  } catch (error) {
    res.status(500).json({error : error.message});
  };
}

