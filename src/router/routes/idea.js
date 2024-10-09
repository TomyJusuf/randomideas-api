const { objIdea } = require('../../data/objData')

const getAllIdeas = (req, res) => {
  res.json({ success: true, data: objIdea })
}

const getIdeaById = (req, res) => {
  const idea = objIdea.find((idea) => idea.id === +req.params.id)
  if (!idea) {
    return res.status(404).json({ success: false, error: 'Resource not found' })
  }
  res.json({
    success: true,
    data: idea,
  })
}

module.exports = { getAllIdeas, getIdeaById }
