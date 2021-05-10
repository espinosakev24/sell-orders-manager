/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {TOrderDetails} from '../../dtos/order.dtos';

import OrderDetailItem
  from './../../components/shared/detail-item/detail-item.component';
import Product
  from './../../components/shared/product-component/product.component';

import backArrowIcon from './back.svg';
import './order-details.view.scss';
import {parse} from 'path';

type TOrderRouteParams = {
  id: string
}
const endpoint: string = 'http://localhost:4000/orders/';

const OrderDetails: React.FunctionComponent = () => {
  const {id} = useParams<TOrderRouteParams>();
  const [orderDetails, setOrderDetails] = useState<TOrderDetails | null>(null);

  useEffect(() => {
    axios.get(endpoint + id).then((res) => {
      setOrderDetails(res.data);
    });
  }, []);

  return (
    <section className="order-details-component">
      {orderDetails &&
      <>
        <article className="order-information-wrapper">

          <Link to='/orders' className="get-back">
            <img src={backArrowIcon} alt="Back arrow" />
            <p>Back</p>
          </Link>

          <h3>Order information</h3>
          <OrderDetailItem
            property='External order number:'
            value={orderDetails.externalOrderNumber || ''}
          />
          <OrderDetailItem
            property='Buyer fullname:'
            value={orderDetails.buyerFullName || ''}
          />
          <OrderDetailItem
            property='Buyer phone number:'
            value={orderDetails.buyerPhoneNumber || ''}
          />
          <OrderDetailItem
            property='Buyer email:'
            value={orderDetails.buyerEmail || ''}
          />
          <br />
          <h3>Shipping information</h3>
          <OrderDetailItem
            property='Shipping adress:'
            value={orderDetails.shippingAddress || ''}
          />
          <OrderDetailItem
            property='Shipping city:'
            value={orderDetails.shippingCity || ''}
          />
          <OrderDetailItem
            property='Shipping region:'
            value={orderDetails.shippingRegion || ''}
          />
          <OrderDetailItem
            property='Shipping country:'
            value={orderDetails.shippingCountry || ''}
          />
        </article>
        <article className="product-information-wrapper">
          <h3>
            Products
          </h3>
          <section className="products-container">
            {orderDetails.lineItems?.map((product, key) => (
              <div key={key}>
                <Product
                  productName={product.productName}
                  productWeight={product.productWeight}
                  productQty={parseInt(product.productQty)}
                />
              </div>
            ))}
          </section>
        </article>
      </>
      }
    </section>
  );
};

export default OrderDetails;
