/* eslint-disable require-jsdoc */
import axios from 'axios';
import {TOrderCreation} from '../dtos/order.dtos';
/**
 * Handles HTTP requests.
 * @param {string} none no constructor initialization.
 */
class HttpHandler {
    private ordersEndpoint: string = 'http://localhost:4000/orders/'
    private shippingmethodsEndpoint: string = 'http://localhost:4000/shippingmethods/';

    // TODO - Implement http methods to add single responsability to cmpnts

    getOrders() {
      return new Promise((res, rej) => {
        axios.get(this.ordersEndpoint).then((response: any) => {
          res(response.data);
        });
      });
    }
    createOrder(order: TOrderCreation) {
      return new Promise((res, rej) => {
        axios.post(this.ordersEndpoint, order).then((response: any) => {
          res(response.data);
        });
      });
    }
    getOrderById(id: string) {
      return new Promise((res, rej) => {
        axios.get(this.ordersEndpoint + 'id').then((response: any) => {
          res(response.data);
        });
      });
    }
    getShippingMethods() {
      return new Promise((resolve, reject) => {
        axios.get(this.shippingmethodsEndpoint).then((response: any) => {
          resolve(response.data);
        });
      });
    }
}
export default new HttpHandler();
