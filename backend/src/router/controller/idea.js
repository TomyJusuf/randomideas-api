const Idea = require('../../models/idea')

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
    const id = req.params.id

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
    console.log(formatedIdea)
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
      // id: (await Idea.countDocuments()) + 1, // Auto-increment ID
      text: req.body.text,
      tags: req.body.tags || ['blog', 'writing'], // Default tags if not provided
      username: req.body.username,
      date: new Date().toISOString().split('T')[0], // Format the date as yyyy-mm-dd
    })

    // Save the new idea to the database
    await idea.save()

    const formattedIdea = {
      ...idea._doc, // Spread the original document fields
      date: idea.date.toISOString().split('T')[0], // Format the date
    }
    // Send the response with the saved idea data
    res.json({
      success: true,
      data: formattedIdea,
    })
  } catch (error) {
    console.error(error) // Log the error for debugging
    res.status(500).json({
      success: false,
      message: 'Server error, could not save the idea',
    })
  }
}

const putIdea = async (req, res) => {
  try {
    const ideaId = req.params.id

    const ideas = await Idea.findOneAndUpdate(
      { _id: ideaId },
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
    const ideaId = req.params.id // Parse the ID from the request parameters

    // Find and delete the idea with the given custom ID
    const deletedIdea = await Idea.findByIdAndDelete({ _id: ideaId })

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
    console.error(error) // Log the error for debugging
    res.status(500).json({
      success: false,
      message: 'Server error, could not delete the idea',
    })
  }
}

module.exports = { getAllIdeas, getIdeaById, postIdea, deleteIdea, putIdea }
