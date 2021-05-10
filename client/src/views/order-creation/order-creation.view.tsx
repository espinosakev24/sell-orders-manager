import React from 'react';
import Product
  from '../../components/shared/product-component/product.component';
import Input from './../../components/shared/input-component/input.component';
import cityIcon from './city.svg';
import phoneIcon from './phone.svg';
import emailIcon from './email.svg';
import storeIcon from './store.svg';
import personIcon from './person.svg';
import addressIcon from './address.svg';
import countryIcon from './country.svg';
import regionIcon from './region.svg';
import numberIcon from './number.svg';
import methodIcon from './method.svg';

import './order-creation.view.scss';

const OrderCreation: React.FunctionComponent = () => {
  return (
    <>
      <section className="order-creation-component">
        <article className="order-information-wrapper">
          <h3>Create an order</h3>
          <div className="input-group">
            <Input
              changeHandler={(e) => console.log(e)}
              icon={storeIcon}
              type="text"
              placeholder='Seller store'
            />
            <Input
              changeHandler={(e) => console.log(e)}
              icon={numberIcon}
              type="text"
              placeholder='External order number'
            />
          </div>
          <div className="input-group">
            <Input
              changeHandler={(e) => console.log(e)}
              icon={personIcon}
              type="text"
              placeholder='Buyer fullname'
            />
            <Input
              changeHandler={(e) => console.log(e)}
              icon={phoneIcon}
              type="text"
              placeholder='Buyer phone number'
            />
          </div>
          <div className="input-group">
            <Input
              changeHandler={(e) => console.log(e)}
              icon={emailIcon}
              type="text"
              placeholder='Buyer email'
            />
            <Input
              changeHandler={(e) => console.log(e)}
              icon={addressIcon}
              type="text"
              placeholder='Shipping address'
            />
          </div>
          <div className="input-group">
            <Input
              changeHandler={(e) => console.log(e)}
              icon={cityIcon}
              type="text"
              placeholder='Shipping city'
            />
            <Input
              changeHandler={(e) => console.log(e)}
              icon={regionIcon}
              type="text"
              placeholder='Shipping region'
            />
          </div>
          <div className="input-group">
            <Input
              changeHandler={(e) => console.log(e)}
              icon={countryIcon}
              type="text"
              placeholder='Shipping country'
            />
            <Input
              changeHandler={(e) => console.log(e)}
              icon={methodIcon}
              type="text"
              placeholder='Shipping method'
            />
          </div>
          <div>
          </div>
        </article>
        <article className="product-creation-wrapper">
          <Product
            name='Product1'
            quantity={23}
            weight={2}
          />
        </article>
      </section>
      <div className="create-order-button-wrapper">
        <button>
          Create order
        </button>
      </div>
    </>
  );
};

export default OrderCreation;
