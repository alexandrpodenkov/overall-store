const Router = require('express');
const router = new Router;
const orderController = require('../controllers/orderController');

router.post('/', orderController.addOrder);
router.get('/', orderController.getOrders);
router.delete('/', orderController.deleteOrder);

module.exports = router;