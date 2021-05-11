import { Request, Response } from 'express';
import OrdersInMemory from '../../storage/orders';
import OrdersController from '../orders.controller';
import OrdersService from './../../services/orders.service';

jest.mock('./../../services/orders.service');
const MockOrdersService = OrdersService as jest.MockedClass<typeof OrdersService>;

beforeEach(() => {
  MockOrdersService.mockClear();
});
describe('ordersController.getOrderList', () => {
  it('Should call ordersService function', () => {
    const mockRequest = {};
    const mockResponse: Partial<Response> = {
      send: jest.fn()
    };
    const mockOdrsService = new MockOrdersService({} as OrdersInMemory);
    const ordersController = new OrdersController(mockOdrsService);

    ordersController.getOrderList(mockRequest as Request, mockResponse as Response);
    expect(mockOdrsService.getOrdersList).toBeCalled();
  });
});