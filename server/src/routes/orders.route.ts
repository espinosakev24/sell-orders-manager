import express, { Router } from 'express';
import OrdersService from '../services/orders.service';
import OrdersInMemory from '../storage/orders';
import OrdersController from './../controllers/orders.controller';

const router:Router = express.Router();

const orders = new OrdersInMemory();
const ordersService = new OrdersService(orders);
const ordersController = new OrdersController(ordersService);

router.route('/').get(ordersController.getOrderList);
router.route('/:id').delete(ordersController.deleteOrderById);

export default router;
