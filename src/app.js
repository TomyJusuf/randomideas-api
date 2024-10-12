const path = require('path')
const express = require('express')

require('dotenv').config()
const cors = require('cors')
const router = require('./router/routes/router')
const connectDB = require('./config/db')

const app = express()
const port = process.env.PORT || 5000

// Connect to MongoDB
connectDB()

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')))

// Set up middleware
app.use(cors()) // Enable CORS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
