import IOrdersManager from '../interfaces/ordersManager.interface';
import { TOrder, TOrderData } from '../interfaces/order.types';
import OrdersInMemory from './../storage/orders';

class OrdersService {
  private orders: IOrdersManager;

  constructor(orders: OrdersInMemory) {
    this.orders = orders;
  }

  getOrdersList(): TOrder[] {
    return this.orders.getAll();
  }
  createOrder(order: TOrderData): TOrder {
    const created = this.orders.create(order);
    return created;
  }
  deleteOrderById(orderId: string): TOrder {
    const deleted = this.orders.deleteById(orderId);
    return deleted;
  }
}

export default OrdersService;