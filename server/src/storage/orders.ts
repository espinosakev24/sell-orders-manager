import IOrdersManager from '../interfaces/ordersManager.interface';
import { TOrder, TOrderData } from '../interfaces/order.types';

class OrdersInMemory implements IOrdersManager {
  orders: TOrder[] = [{
    id: '1',
  }]

  create(order: TOrderData): TOrder {
    const date = Date.now();
    const newOrder: TOrder = {
      ...order,
      id: '_' + Math.random().toString(36).substr(2, 9),
      creationDate: date.toString()
    };
    this.orders.push(newOrder);
    return newOrder;
  }
  getAll(): TOrder[] {
    return this.orders;
  }
  getById(id: string): TOrder {
    const orderItem = this.orders.find((order: TOrder) => order.id === id) as TOrder;
    return orderItem || {};
  }
  editById(id: string): TOrder {
    throw new Error('Method not implemented. ' + id);
  }
  deleteById(id: string): TOrder {
    const orderToDelete = {
      ...this.orders.find((order: TOrder) => order.id === id) as TOrder
    };
    this.orders = this.orders.filter((order: TOrder) => order.id !== orderToDelete.id);
    return orderToDelete;
  }

}
export default OrdersInMemory;
