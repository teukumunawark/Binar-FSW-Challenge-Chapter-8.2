const router = require('express').Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddlewares');

router.post('/login', authController.loginController);
router.post('/register', authController.registerController);



router.get(
  '/me', 
  authMiddleware.authenticate, 
  authController.currentUser
);

module.exports = router;