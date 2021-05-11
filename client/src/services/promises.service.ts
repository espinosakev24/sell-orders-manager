/* eslint-disable require-jsdoc */

import {TProduct} from '../dtos/order.dtos';

class PromiseCalcs {
  orderWeight(products: TProduct[]): number {
    let weight: number = 0;

    for (const prod of products) {
      weight += prod.productQty * prod.productWeight;
    }
    return weight;
  }
}

export default new PromiseCalcs();
