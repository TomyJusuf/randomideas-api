const Idea = require('../../models/idea')
const mongoose = require('mongoose')

const getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find()

    const formattedIdeas = ideas.map((idea) => ({
      ...idea._doc,
      date: idea.date.toISOString().split('T')[0], // 'yyyy-mm-dd'
    }))

    res.json({ success: true, data: formattedIdeas })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error, could not fetch ideas',
    })
  }
}

const getIdeaById = async (req, res) => {
  try {
    const { id } = req.params
    const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id)

    if (!isValidObjectId(id)) {
      return res
        .status(404)
        .json({ success: false, error: 'Resource not found' })
    }

    const idea = await Idea.findById(id).exec()
    if (!idea) {
      return res
        .status(404)
        .json({ success: false, error: 'Resource not found' })
    }
    const formatedIdea = {
      ...idea._doc,
      date: idea.date.toISOString().split('T')[0], // 'yyyy-mm-dd'
    }

    res.json({
      success: true,
      data: formatedIdea,
    })
  } catch (error) {
    console.error(error) // Log the error for debugging
    res.status(500).json({
      success: false,
      message: 'Server error, could not fetch the idea',
    })
  }
}

const postIdea = async (req, res) => {
  try {
    // Create a new Idea instance
    const idea = new Idea({
      text: req.body.text,
      tags: req.body.tags || ['blog', 'writing'],
      username: req.body.username,
      date: new Date().toISOString().split('T')[0], // Format the date as yyyy-mm-dd
    })

    // Save the new idea to the database
    await idea.save()

    const formattedIdea = {
      ...idea._doc,
      date: idea.date.toISOString().split('T')[0], // Format the date
    }

    res.json({
      success: true,
      data: formattedIdea,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Server error, could not save the idea',
    })
  }
}

const putIdea = async (req, res) => {
  try {
    const { id } = req.params
    const ideas = await Idea.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true },
      { runValidators: true }
    ).exec()

    if (!ideas) {
      return res
        .status(404)
        .json({ success: false, error: 'Resource not found' })
    }
    const formattedUpdatedIdea = {
      ...ideas._doc,
      date: ideas.date.toISOString().split('T')[0], // Format date to 'yyyy-mm-dd'
    }

    res.json({ success: true, data: formattedUpdatedIdea })
  } catch (error) {
    console.error(error) // Log the error for debugging
    res.status(500).json({
      success: false,
      message: 'Server error, could not save the idea',
    })
  }
}

const deleteIdea = async (req, res) => {
  try {
    const { id } = req.params

    const deletedIdea = await Idea.findByIdAndDelete({ _id: id })

    if (!deletedIdea) {
      return res
        .status(404)
        .json({ success: false, error: 'Resource not found' })
    }

    res.json({
      success: true,
      data: deletedIdea, // Return the deleted idea in the response
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Server error, could not delete the idea',
    })
  }
}

module.exports = { getAllIdeas, getIdeaById, postIdea, deleteIdea, putIdea }
