const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    creator:String,
    description:String,
    photos:[String]
},
{ timestamps: true })

const postModel = mongoose.model('posts',postSchema)

module.exports = postModel