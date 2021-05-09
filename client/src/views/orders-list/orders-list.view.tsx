import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './orders-list.view.scss';
import axios from 'axios';
import OrderItem
  from './../../components/shared/order-item/order-item.component';
import {TOrderItem} from '../../dtos/Order.types';

const endpoint: string = 'http://localhost:4000/orders/';

const OrdersList: React.FunctionComponent = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <section className="orders-list-component">
      {orders.map((order: TOrderItem, key) => (
        <Link to={'/orders/' + order.id} key={key}>
          <div className="order-item-container">
            <OrderItem
              id={order.id}
              sellerStore={order.sellerStore}
              shippingMethod={order.shippingMethod}
              externalOrderNumber={order.externalOrderNumber}
              creationDate={order.creationDate}
            />
          </div>
        </Link>
      ))
      }
    </section>
  );
};

export default OrdersList;
