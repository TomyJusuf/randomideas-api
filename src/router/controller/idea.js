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
    text: req.body.text,
    tags: ['blog', 'writing'],
    username: req.body.username,
    date: new Date().toISOString().split('T')[0],
  }

  objIdea.push(idea)

  res.json({
    success: true,
    data: idea,
  })
}

const putIdea = (req, res) => {
  const ideaId = req.params.id
  const index = objIdea.findIndex((idea) => idea.id === +ideaId)

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Resource not found' })
  }
  const idea = objIdea[index]
  objIdea[index] = { ...idea, ...req.body }
  res.json({ success: true, data: objIdea[index] })
}

const deleteIdea = (req, res) => {
  const ideaId = +req.params.id

  const index = objIdea.findIndex((idea) => idea.id === ideaId)

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Resource not found' })
  }
  const filteredIdea = objIdea.splice(index, 1)

  res.json({
    success: true,
    data: filteredIdea,
  })
}

module.exports = { getAllIdeas, getIdeaById, postIdea, deleteIdea, putIdea }
