import React from 'react';
import './detail-item.component.scss';

import {TOrderDetailItem} from './../../../dtos/order.dtos';

const OrderDetailItem: React.FunctionComponent<TOrderDetailItem> = (
    props: TOrderDetailItem,
) => {
  return (
    <section className="order-detail-component">
      <div className="order-definition">
        <div className="order-property">
          {props.property}
        </div>
        <div className="order-value">
          {props.value}
        </div>
      </div>
    </section>
  );
};

export default OrderDetailItem;

