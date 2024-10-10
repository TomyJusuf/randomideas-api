const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log('MongoDB connected: ' + conn.connection.host)
    return conn
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
