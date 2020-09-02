const Article = require('../models/article')
const articlesCltr = {}

articlesCltr.list = (req, res) => {
    Article.find()
        .then(articles => {
            res.json(articles)
        })
        .catch(err => {
            res.json(err)
        })
}

articlesCltr.create = (req, res) => {
    const body = req.body
    const article = new Article(body)
    article.save()
        .then(article => {
            res.json(article)
        })
        .catch(err => {
            res.json(err)
        })
    
}

articlesCltr.show = (req, res) => {
    const id = req.params.id
    Article.findById(id)
        .then(article => {
            res.json(article)
        })
        .catch(err => {
            res.json(err)
        })
}

articlesCltr.put = (req, res) => {
    const id = req.params.id
    const body = req.body
    Article.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(article => {
            res.json(article)
        })
        .catch(err => {
            res.json(err)
        })
}

articlesCltr.destroy = (req, res) => {
    const id = req.params.id
    Article.findByIdAndDelete(id)
        .then(article => {
            res.json(article)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = articlesCltr