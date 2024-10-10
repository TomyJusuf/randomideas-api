const { objIdea, objTechnologies } = require('../../data/objData')

const getAll = (req, res) => {
  res.json({
    success: true,
    data: {
      ideas: objIdea,
      technologies: objTechnologies,
    },
  })
}

module.exports = getAll
