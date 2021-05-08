import { IOrder, IOrderData } from './order.types';

interface IOrdersManager {
  orders: IOrder[],
  create(order: IOrderData): IOrder,
  getAll(): IOrder[],
  getById(id: string): IOrder,
  editById(id: string): IOrder,
  deleteById(id: string): IOrder
}
export default IOrdersManager;
