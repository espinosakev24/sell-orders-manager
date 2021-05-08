import { TOrder, TOrderData } from './order.types';

interface IOrdersManager {
  orders: TOrder[],
  create(order: TOrderData): TOrder,
  getAll(): TOrder[],
  getById(id: string): TOrder,
  editById?(id: string): TOrder,
  deleteById(id: string): TOrder
}
export default IOrdersManager;
