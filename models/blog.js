require('dotenv').config()
const mongoose = require('mongoose')
const {  MONGODB_URI } = require('../utils/config')

mongoose.set('strictQuery', false)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

blogSchema.set('toJSON', {
    transform: ( document, returnObject) => {
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
        delete returnObject.__v
    }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = { Blog, connectDB }