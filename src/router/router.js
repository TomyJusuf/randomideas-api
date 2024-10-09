const express = require('express')
const router = express.Router()
const { getAllIdeas, getIdeaById } = require('./routes/idea')
const {
  getAllTechnologies,
  getTechnologieById,
} = require('./routes/technologies')
const { getAll } = require('./routes/allObjects')

router.get('/', (req, res) => {
  res.send({ message: 'Hello World' })
})

router.get('/api/allObjects', getAll)

router.get('/api/ideas', getAllIdeas)

router.get('/api/ideas/:id', getIdeaById)

router.get('/api/technologies', getAllTechnologies)

router.get('/api/technologies/:id', getTechnologieById)

module.exports = router
