import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';

import OrderItem
  from './../../components/shared/order-item/order-item.component';
import {IOrderItem} from '../../dtos/order.dtos';


import './orders-list.view.scss';
import Button from '../../components/shared/button-component/button.component';
import {Link} from 'react-router-dom';


const endpoint: string = 'http://localhost:4000/orders/';
const swal: SweetAlert = _swal as any;

const OrdersList: React.FunctionComponent = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = function() {
    axios.get(endpoint).then((res) => {
      setOrders(res.data);
    });
  };

  const deleteItemHandler = (id: string): void => {
    axios.delete(endpoint + id).then((res) => {
      swal({
        title: 'Element deleted',
        text: 'You have deleted the element with id: ' + id + ' successfully',
        icon: 'success',
      });
      fetchOrders();
    });
  };

  return (
    <> { orders.length ?
      <section className="orders-list-component">
        {orders.map((order: IOrderItem, key) => (
          <div className="order-item-container" key={key}>
            <OrderItem
              id={order.id}
              sellerStore={order.sellerStore}
              shippingMethod={order.shippingMethod}
              externalOrderNumber={order.externalOrderNumber}
              creationDate={order.creationDate}
              deleteItem={deleteItemHandler}
            />
          </div>
        ))
        }
      </section> :
      <section className="no-orders-section">
        <h3>
          No orders to show...
        </h3>
        <img
          src="https://media-public.canva.com/1ueM8/MAEFg-1ueM8/1/s.svg"
          alt="Empty box image"
          height='auto'
        />
        <Link to='/orders/create'>
          <Button label='Create an order!'/>
        </Link>
      </section>
    }
    </>
  );
};

export default OrdersList;
