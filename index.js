const express = require('express')
const app = express()
require('dotenv').config()
const categoryRouter = require('./api/category/router')

const port = process.env.SERVER_PORT || 3200

app.use(express.json())
app.use('/api', categoryRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})