import React from 'react';
import './product.component.scss';
import TProduct from './../../../dtos/product.type';
import productIcon from './product.svg';


const Product: React.FunctionComponent<TProduct> = (props: TProduct) => {
  return (
    <section className="product-component">
      <div className="item-definition">
        <div className="item-property">
          <img src={productIcon} alt="" />
          <p className="product-name">{props.productName}</p>
          <div className="empty">&nbsp;</div>
        </div>
      </div>
      <hr />

      <div className="item-definition">
        <div className="item-property">
          <p>Weight:</p>
        </div>
        <p className="item-value">{props.productWeight}</p>
      </div>
      <hr />

      <div className="item-definition">
        <div className="item-property">
          <p>Quantity:</p>
        </div>
        <p className="item-value">{props.productQty}</p>
      </div>
    </section>
  );
};

export default Product;
