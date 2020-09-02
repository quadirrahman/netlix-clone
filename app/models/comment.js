const mongoose = require('mongoose')

const Schema = mongoose.Schema
const commentSchema = new Schema({
    commentingUser: {
        type: String,
        required: true
    },
    commentBody: {
        type: String,
        required: true
    },
    commentDate: {
        type: Date,
        default: Date.now
    }
})

// create a model
const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

