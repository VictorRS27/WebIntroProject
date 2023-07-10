const router = require('express').Router();
const productController = require('../controllers/ProductController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct);
router.post('/', productController.createProduct);

module.exports = router;
