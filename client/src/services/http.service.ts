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
    private validationEndpoint: string = 'http://localhost:4000/shippingmethods/method/validate/';

    constructor() {

    }

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
    mockOrder() {
      return new Promise((resolve, reject) => {
        axios.post(this.ordersEndpoint, {
          'sellerStore': 'My store #123',
          'shippingMethod': 'international',
          'externalOrderNumber': 12345,
          'buyerFullName': 'Kevin Espionsa',
          'buyerPhoneNumber': 321321321,
          'buyerEmail': 'jhondoe@gmail.com',
          'shippingAddress': 'cl 3c #44 - 12',
          'shippingCity': 'Medellin',
          'shippingRegion': 'Antioquia',
          'shippingCountry': 'Colombia',
          'lineItems': [
            {
              'productName': 'product name 1',
              'productQty': 2,
              'productWeight': 15,
            },
            {
              'productName': 'product name 1',
              'productQty': 4,
              'productWeight': 10,
            },
            {
              'productName': 'product name 1',
              'productQty': 1,
              'productWeight': 30,
            }],
        }).then((response: any) => {
          resolve(response.data);
        });
      });
    }
    getWeightAvailability(id: string, body: any) {
      return new Promise((resolve, reject) => {
        axios.put(this.validationEndpoint + id, body)
            .then((response: any) => {
              resolve(response.data);
            })
            .catch((error: any) => {
              if (error.response) {
                reject(error.response.data);
              }
            });
      });
    }
}
export default new HttpHandler();
