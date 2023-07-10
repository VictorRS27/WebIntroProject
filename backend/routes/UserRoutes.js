const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser);
router.post('/', UserController.createUser);

module.exports = router;
