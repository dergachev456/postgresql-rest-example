const { Router } = require('express');
const router = Router();

const { getOrders, createOrder, getOrderById, updateOrder, getStat } = require('../controllers/index.controller');

router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById);
router.get('/statistics', getStat);
router.post('/orders', createOrder);
router.put('/orders/:id', updateOrder)

module.exports = router;