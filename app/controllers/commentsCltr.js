const Comment = require('../models/comment')
const commentsCltr = {}

commentsCltr.list = (req, res) => {
    Comment.find()
        .then(comments => {
            res.json(comments)
        })
        .catch(err => {
            res.json(err)
        })
}

commentsCltr.create = (req, res) => {
    const body = req.body
    const comment = new Comment(body)
    comment.save()
        .then(comment => {
            res.json(comment)
        })
        .catch(err => {
            res.json(err)
        })
    
}

commentsCltr.show = (req, res) => {
    const id = req.params.id
    Comment.findById(id)
        .then(comment => {
            res.json(comment)
        })
        .catch(err => {
            res.json(err)
        })
}

commentsCltr.put = (req, res) => {
    const id = req.params.id
    const body = req.body
    Comment.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(comment => {
            res.json(comment)
        })
        .catch(err => {
            res.json(err)
        })
}

commentsCltr.destroy = (req, res) => {
    const id = req.params.id
    Comment.findByIdAndDelete(id)
        .then(comment => {
            res.json(comment)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = commentsCltr