import React from 'react';
import {IOrderItem} from '../../../dtos/order.dtos';
import './order-item.component.scss';
import storeIcon from './sellerstore.svg';
import calendarIcon from './calendar.svg';
import shippingIcon from './shipping.svg';
import numberIcon from './infosquare.svg';
import {Link} from 'react-router-dom';

const OrderItem: React.FunctionComponent<IOrderItem> = (props: IOrderItem) => {
  const deleteHandler = (event: any) => {
    props.deleteItem(event.target.id);
  };
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
      <hr />
      <div className="item-definition">
        <Link to={'/orders/' + props.id}>
          <button className="item-button-actions" name="details">
            See details
          </button>
        </Link>
        <button
          className="item-button-actions"
          name="delete"
          onClick={(e) => deleteHandler(e)}
          id={props.id}
        >
            Delete
        </button>
      </div>
    </section>
  );
};

export default OrderItem;
