const {
  getAllIdeas,
  getIdeaById,
  postIdea,
  deleteIdea,
  putIdea,
} = require('./idea')
const { getAllTechnologies, getTechnologieById } = require('./technologies')
const getAll = require('./allObjects')

module.exports = {
  getAllIdeas,
  getIdeaById,
  postIdea,
  deleteIdea,
  putIdea,
  getAllTechnologies,
  getTechnologieById,
  getAll,
}
