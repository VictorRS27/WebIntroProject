const router = require('express').Router();
const CartController = require('../controllers/CartController');

router.get('/', CartController.getAllCarts);
router.get('/:id', CartController.getCartById);
router.delete('/:id', CartController.deleteCart);
router.put('/:id', CartController.updateCart);
router.post('/', CartController.createCart);

module.exports = router;
