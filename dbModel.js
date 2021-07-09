const Mongoose = require('mongoose')

const tiktokSchema = Mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String

})

// collection inside the database

module.exports = Mongoose.model('tiktokVideos', tiktokSchema)