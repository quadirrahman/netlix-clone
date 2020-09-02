const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    articleUser: {
        type: String,
        required: true
    },
    articleBody: {
        type: String,
        required: true
    },
    articleDate: {
        type: Date,
        default: Date.now
    }
})

// create a model
const Article = mongoose.model('Article', articleSchema)

module.exports = Article

