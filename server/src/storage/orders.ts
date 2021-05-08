import IOrdersManager from '../interfaces/ordersManager.interface';
import { TOrder, TOrderData } from '../interfaces/order.types';

class OrdersInMemory implements IOrdersManager {
  orders: TOrder[] = [{
    id: '1',
    name: 'order #1'
  }]

  create(order: TOrderData): TOrder {
    const newOrder: TOrder = {
      id: '1',
      name: order.name
    };
    this.orders.push(newOrder);
    return newOrder;
  }
  getAll(): TOrder[] {
    return this.orders;
  }
  getById(id: string): TOrder {
    throw new Error('Method not implemented.');
  }
  editById(id: string): TOrder {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): TOrder {
    throw new Error('Method not implemented.');
  }

}
export default OrdersInMemory;
