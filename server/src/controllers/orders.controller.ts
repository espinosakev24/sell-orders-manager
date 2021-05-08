import { Request, Response } from 'express';
import { TOrder } from '../interfaces/order.types';
import OrdersService from './../services/orders.service';

class OrderController {
  private ordersService: OrdersService;

  constructor(ordersService: OrdersService) {
    this.ordersService = ordersService;
    this.getOrderList = this.getOrderList.bind(this);
    this.deleteOrderById = this.deleteOrderById.bind(this);
  }
  getOrderList(req: Request, res: Response): void {
    console.log(this);
    res.send(this.ordersService.getOrdersList());
  }
  deleteOrderById(req: Request, res: Response): void {
    const orderDeleted: TOrder = this.ordersService.deleteOrderById(req.params.id);
    res.send(orderDeleted);
  }
}
export default OrderController;
