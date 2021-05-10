import React, {useState} from 'react';
import Product
  from '../../components/shared/product-component/product.component';
import Input from './../../components/shared/input-component/input.component';
import ProductForm from '../../components/product-form/product-form';

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
import TProduct from '../../dtos/product.type';

const OrderCreation: React.FunctionComponent = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const addProdutHandler = (product: TProduct) => {
    setProducts([
      product,
      ...products,
    ]);
  };
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
              type="number"
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
          <h3>Add products</h3>
          <ProductForm addProductToList={addProdutHandler}/>
          <section className="products-container">
            {products.reverse().map((product, key) => (
              <div key={key}>
                <Product
                  productName={product.productName}
                  productQty={product.productQty}
                  productWeight={product.productWeight}
                />
              </div>
            ))}
          </section>
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
