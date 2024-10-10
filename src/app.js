// app.js
const express = require('express')
const cors = require('cors')
const router = require('./router/routes/router')

const app = express()
const port = 5000

app.use(cors()) // Enable CORS

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
