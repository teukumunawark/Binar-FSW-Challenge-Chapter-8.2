const router = require('express').Router();
const carController = require('../controllers/carController');
const authMiddleware = require('../middlewares/authMiddlewares');
const upload = require('../utils/fileUpload');

router.post("/car",
  authMiddleware.authenticate,
  authMiddleware.isAdminOrSuperAdmin,
  upload.single("image"),
  carController.createController,
);

router.get('/cars',
  carController.getAllController,
);

router.get('/car/:id',
  carController.getByIdController,
);

router.put('/car/:id',
  authMiddleware.authenticate,
  authMiddleware.isAdminOrSuperAdmin,
  carController.updateController,
);

router.delete('/car/:id',
  authMiddleware.authenticate,
  authMiddleware.isAdminOrSuperAdmin,
  carController.deleteController,
);

module.exports = router;