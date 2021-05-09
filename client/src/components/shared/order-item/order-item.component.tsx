import React from 'react';
import {TOrderItem} from '../../../dtos/Order.types';
import './order-item.component.scss';
import storeIcon from './sellerstore.svg';
import calendarIcon from './calendar.svg';
import shippingIcon from './shipping.svg';
import numberIcon from './infosquare.svg';

const OrderItem: React.FunctionComponent<TOrderItem> = (props: TOrderItem) => {
  return (
    <section className="orderItem-component">
      <div className="item-definition">
        <div className="item-property">
          <img src={storeIcon} alt="" />
          <p>Seller store:</p>
        </div>
        <p className="item-value">{props.sellerStore}</p>
      </div>
      <hr />
      <div className="item-definition">
        <div className="item-property">
          <img src={shippingIcon} alt="" />
          <p>Shipping method:</p>
        </div>
        <p className="item-value">{props.shippingMethod}</p>
      </div>
      <hr />
      <div className="item-definition">
        <div className="item-property">
          <img src={numberIcon} alt="" />
          <p>Sell order Number:</p>
        </div>
        <p className="item-value">{props.externalOrderNumber}</p>
      </div>
      <hr />
      <div className="item-definition">
        <div className="item-property">
          <img src={calendarIcon} alt="" />
          <p>Created at:</p>
        </div>
        <p className="item-value">{props.creationDate}</p>
      </div>
    </section>
  );
};

export default OrderItem;
