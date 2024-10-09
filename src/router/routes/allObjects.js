const { objIdeas, objTechnologies } = require('../../data/objData')

const getAll = (req, res) => {
  res.json({
    success: true,
    data: {
      ideas: objIdeas,
      technologies: objTechnologies,
    },
  })
}

module.exports = { getAll }
