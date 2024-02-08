const express = require('express')
const cors = require('cors')
const blogRouter  = require('./controller/controller')

const app = express()

app.use(cors())
app.use(express.json())
// app.use(express.static('dist'))
// app.use( middleware )
app.use('/api/blogs', blogRouter)
// app.use {  middleware error }


module.exports =  app

