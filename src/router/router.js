const express = require('express')
const router = express.Router()
const { getAllIdeas, getIdeaById, postIdea } = require('./routes/idea')
const {
  getAllTechnologies,
  getTechnologieById,
} = require('./routes/technologies')
const getAll = require('./routes/allObjects')

router.get('/', (req, res) => {
  res.send({ message: 'Hello World' })
})

router.get('/api/all', getAll)

router.get('/api/ideas', getAllIdeas)

router.get('/api/ideas/:id', getIdeaById)

router.post('/api/ideas', postIdea)

router.get('/api/technologies', getAllTechnologies)

router.get('/api/technologies/:id', getTechnologieById)

module.exports = router
