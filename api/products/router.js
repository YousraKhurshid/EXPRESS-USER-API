const app = require('express')
const router = app.Router()
const { getProducts, postProducts } = require('./controller')

router.get('/products', getProducts)
router.post('/addproduct', postProducts)

module.exports = router