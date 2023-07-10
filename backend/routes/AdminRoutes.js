const router = require('express').Router();
const AdminController = require('../controllers/AdminController');

router.get('/', AdminController.getAllAdmins);
router.get('/:id', AdminController.getAdminById);
router.delete('/:id', AdminController.deleteAdmin);
router.put('/:id', AdminController.updateAdmin);
router.post('/', AdminController.createAdmin);

module.exports = router;
