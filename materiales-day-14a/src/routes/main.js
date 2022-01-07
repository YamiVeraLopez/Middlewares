let express = require('express');
let router = express.Router();
let controller = require('../controllers/mainController');
const userAdmin = require('../middlewares/userAdmin');
let userAdminCheck = require('../middlewares/userAdmin')

router.get('/', controller.index);
router.get('/admin', userAdmin, controller.admin)


module.exports = router