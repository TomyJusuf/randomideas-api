const { objTechnologies } = require('../../data/objData')

const getAllTechnologies = (req, res) => {
  res.json({ success: true, data: objTechnologies })
}

const getTechnologieById = (req, res) => {
  const technologie = objTechnologies.find((technologie) => {
    return technologie.id === +req.params.id
  })
  if (!technologie) {
    return res.status(404).json({ success: false, error: 'Resource not found' })
  } else {
    res.json({
      success: true,
      data: technologie,
    })
  }
}
module.exports = { getAllTechnologies, getTechnologieById }
