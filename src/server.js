const express = require('express')
const cors = require('cors') // Allow CORS for your API
const port = 5000

const app = express()
const ideas = [
  {
    id: 1,
    text: 'Learn JavaScript',
    tags: ['learn', 'javascript'],
    username: 'TomyJusuf',
    date: '2019-01-01',
  },
  {
    id: 2,
    text: 'Make a simple web app',
    tags: ['javascript', 'webapp'],
    username: 'TomyJusuf',
    date: '2019-01-05',
  },
  {
    id: 3,
    text: 'Create a simple game',
    tags: ['javascript', 'game'],
    username: 'TomyJusuf',
    date: '2019-01-10',
  },
  {
    id: 4,
    text: 'Start a blog',
    tags: ['blog', 'writing'],
    username: 'TomyJusuf',
    date: '2019-01-15',
  },
  {
    id: 5,
    text: 'Create a simple chat app',
    tags: ['javascript', 'chat'],
    username: 'TomyJusuf',
    date: '2019-01-20',
  },
  {
    id: 6,
    text: 'Master simple webpack',
    tags: ['javascript', 'webpack'],
    username: 'TomyJusuf',
    date: '2024-01-20',
  },
]
const technologies = [
  {
    id: 1,
    name: 'HTML',
    year: 1993,
    description:
      'The HyperText Markup Language, or HTML is the standard markup language used to create web pages. Its purpose is to provide a structured representation of content for the web.',
  },
  {
    id: 2,
    name: 'CSS',
    year: 1996,
    description:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a webpage written in HTML or XML. It is used for defining the layout, colors, fonts and other aspects of a webpage.',
  },
  {
    id: 3,
    name: 'JavaScript',
    year: 1995,
    description:
      'JavaScript is a high-level, dynamic, interpreted programming language that is primarily used for client-side scripting on the web. It can also be used for server-side programming with technologies such as Node.js.',
  },
  {
    id: 4,
    name: 'React',
    year: 2013,
    description:
      'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers. It can be used for developing web applications, as well as mobile applications.',
  },
  {
    id: 5,
    name: 'Redux',
    year: 2015,
    description:
      'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.',
  },
]

app.use(cors()) // Enable CORS if needed

// Simple route
app.get('/', (req, res) => {
  res.json('Random Ideas App')
})

app.get('/api/allObjects', (req, res) => {
  res.json({
    success: true,
    data: {
      ideas: ideas,
      technologies: technologies,
    },
  })
})

app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas })
})

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id)
  if (!idea) {
    return res.status(404).json({ success: false, error: 'Resource not found' })
  }
  res.json({
    success: true,
    data: idea,
  })
})

app.get('/api/technologies', (req, res) => {
  res.json({ success: true, data: technologies })
})

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}`))
