const express = require('express')
const router = express.Router()
const Idea = require('../../models/idea')
const {
  getAllIdeas,
  getIdeaById,
  postIdea,
  deleteIdea,
  getAll,
  getAllTechnologies,
  getTechnologieById,
  putIdea,
} = require('../controller/controller')

router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find()
    res.json(ideas)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/api/all', getAll)

router.get('/api/ideas', getAllIdeas)

router.get('/api/ideas/:id', getIdeaById)

router.post('/api/ideas', postIdea)

router.put('/api/ideas/:id', putIdea)

router.delete('/api/ideas/:id', deleteIdea)

router.get('/api/technologies', getAllTechnologies)

router.get('/api/technologies/:id', getTechnologieById)

module.exports = router
