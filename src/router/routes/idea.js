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

const postIdea = (req, res) => {
  const idea = {
    id: objIdea[objIdea.length - 1].id + 1,
    text: req.body.title,
    tags: ['blog', 'writing'],
    username: 'TomyJusuf',
    date: new Date().toISOString().split('T')[0],
  }

  objIdea.push(idea)

  res.json({
    success: true,
    data: idea,
  })
}

module.exports = { getAllIdeas, getIdeaById, postIdea }
