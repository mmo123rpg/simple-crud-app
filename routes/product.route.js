const express = require('express')
const router = express.Router()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')

router.get('/api/products', getProducts)
router.post('/api/products', createProduct)

router.get('/api/product/:id', getProduct)
router.put('/api/product/:id', updateProduct)
router.delete('/api/product/:id', deleteProduct)

module.exports = router;