import IOrdersManager from '../dtos/ordersManager.interface';
import { TOrder, TOrderData } from '../dtos/order.types';
import moment from 'moment';

class OrdersInMemory implements IOrdersManager {
  orders: TOrder[] = [];

  create(order: TOrderData): TOrder {
    const randomNumber = Math.random() * 101;
    const date = new Date();
    const id = '_' + Math.random().toString(36).substr(2, 9);
    const dateFormat = moment(date).format('YYYY-MM-DD');
    const internalOrderNumber = 'MSE-' + date.getTime().toString() + '-' + Math.floor(randomNumber).toString();

    const newOrder: TOrder = {
      ...order,
      id: id,
      internalOrderNumber: internalOrderNumber,
      creationDate: dateFormat,
      lineItems: order.lineItems
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
