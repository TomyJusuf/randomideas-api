const mongoose = require('mongoose')

const ideaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Idea', ideaSchema)
