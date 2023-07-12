ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/products', ProductController.getAllProducts); 
    app.get('/api/products/:id', ProductController.getProduct);
    app.post('/api/products', ProductController.createProduct);
}