const express = require('express')
const app = express()
require('dotenv').config()
const categoryRouter = require('./api/category/router')
const userRouter = require('./api/user/router')
const productsRouter = require('./api/products/router')
const brandsRouter = require('./api/brands/router')

const port = process.env.SERVER_PORT || 3200


app.use('/api', userRouter)
app.use('/api', productsRouter)
app.use('/api', brandsRouter)
app.use('/api', categoryRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})