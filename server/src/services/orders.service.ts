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
  getOrderById(id: string): TOrder {
    return this.orders.getById(id);
  }
  createOrder(order: TOrderData): TOrder {
    const newOrder:TOrderData = {
      sellerStore: order.sellerStore,
      shippingMethod: order.shippingMethod,
      externalOrderNumber: order.externalOrderNumber,
      buyerFullName: order.buyerFullName,
      buyerPhoneNumber: order.buyerPhoneNumber,
      buyerEmail: order.buyerEmail,
      shippingAddress: order.shippingAddress,
      shippingCity: order.shippingCity,
      shippingRegion: order.shippingRegion,
      shippingCountry: order.shippingCountry,
      lineItems: order.lineItems,
    };
    const created = this.orders.create(newOrder);
    return created;
  }
  deleteOrderById(orderId: string): TOrder {
    const deleted = this.orders.deleteById(orderId);
    return deleted;
  }
}

export default OrdersService;