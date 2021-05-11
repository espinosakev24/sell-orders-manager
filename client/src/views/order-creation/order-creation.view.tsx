import React, {useEffect, useState} from 'react';
import Product
  from '../../components/shared/product-component/product.component';
import Input from './../../components/shared/input-component/input.component';
import ProductForm from '../../components/product-form/product-form';
import TProduct from '../../dtos/product.type';
import {TMethod, TOrderCreation} from '../../dtos/order.dtos';
import {Link} from 'react-router-dom';
import promiseCalcs from './../../services/promises.service';
import httpService from './../../services/http.service';

import cityIcon from './city.svg';
import phoneIcon from './phone.svg';
import emailIcon from './email.svg';
import storeIcon from './store.svg';
import personIcon from './person.svg';
import addressIcon from './address.svg';
import countryIcon from './country.svg';
import regionIcon from './region.svg';
import numberIcon from './number.svg';
// import methodIcon from './method.svg';

import axios from 'axios';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import './order-creation.view.scss';

const swal: SweetAlert = _swal as any;
const endpoint = 'http://localhost:4000/orders/';
const shippingmethodsEndpoint = 'http://localhost:4000/shippingmethods/';

const OrderCreation: React.FunctionComponent = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  // const [methodId, setMethodId] = useState('');
  const [order, setOrder] = useState<TOrderCreation>({
    sellerStore: '',
    shippingMethod: '',
    externalOrderNumber: 0,
    buyerFullName: '',
    buyerPhoneNumber: 0,
    buyerEmail: '',
    shippingAddress: '',
    shippingCity: '',
    shippingRegion: '',
    shippingCountry: '',
    lineItems: [],
  });
  const [methods, setMethods] = useState<TMethod[]>([]);
  const [methodId, setMethodId] = useState('');

  useEffect(() => {
    axios.get(shippingmethodsEndpoint)
        .then((res) => {
          setMethods(res.data);
        });
  }, []);
  const updateProducts = function(product: TProduct) {
    setOrder({
      ...order,
      lineItems: [...products, product],
    });
    setProducts([
      product,
      ...products,
    ]);
  };
  const addProdutHandler = (product: TProduct) => {
    if (!methodId) {
      updateProducts(product);
      return;
    }
    const weight = promiseCalcs.orderWeight([...products, product]);
    httpService.getWeightAvailability(methodId, {weight: weight})
        .then((res) => {
          updateProducts(product);
        })
        .catch((err) => {
          swal({
            title: 'Weight not allowed',
            text: 'The total weight of your products is not allowed ' +
                  'for the shipping method selected',
            icon: 'warning',
            dangerMode: true,
          });
        });
  };

  const changeHandler = (nameId: string, value: string | number) => {
    setOrder({
      ...order,
      [nameId]: value,
    });
  };
  const handleDropdownSelect = (event: any) => {
    const el: any = event.target;
    const id = el.options[el.selectedIndex].id;
    const selected: string = el.value;

    const totalWeight = promiseCalcs.orderWeight(products);
    console.log(totalWeight);


    httpService.getWeightAvailability(id, {weight: totalWeight})
        .then((res: any) => {
          setOrder({
            ...order,
            shippingMethod: selected,
          });
          setMethodId(id);
          console.log(res);
        })
        .catch((error) => {
          el.value = 'default';
          swal({
            title: 'Weight not allowed',
            text: 'The total weight of your products is not allowed ' +
                  'for the shipping method selected',
            icon: 'warning',
            dangerMode: true,
          });
        });
  };

  const createOrderHandler = (event: any) => {
    const orderValues = Object.values(order);
    if (!orderValues.every((i) => typeof i === 'number' ? true: i.length)) {
      event.preventDefault();
      swal({
        title: 'Can not create order',
        text: 'There are empty fields',
        icon: 'warning',
        dangerMode: true,
      });
      return;
    }
    axios.post(endpoint, order).then((res) => {
      console.log(res.data);
      swal({
        title: 'Success!',
        text: 'Your order have been created successfully',
        icon: 'success',
      });
    });
  };

  return (
    <>
      <section className="order-creation-component">
        <article className="order-information-wrapper">
          <h3>Create an order</h3>
          <div className="input-group">
            <Input
              changeHandler={changeHandler}
              icon={storeIcon}
              type="text"
              placeholder='Seller store'
              nameId='sellerStore'
            />
            <Input
              changeHandler={changeHandler}
              icon={numberIcon}
              type="number"
              placeholder='External order number'
              nameId='externalOrderNumber'
            />
          </div>
          <div className="input-group">
            <Input
              changeHandler={changeHandler}
              icon={personIcon}
              type="text"
              placeholder='Buyer fullname'
              nameId='buyerFullName'
            />
            <Input
              changeHandler={changeHandler}
              icon={phoneIcon}
              type="number"
              placeholder='Buyer phone number'
              nameId='buyerPhoneNumber'
            />
          </div>
          <div className="input-group">
            <Input
              changeHandler={changeHandler}
              icon={emailIcon}
              type="text"
              placeholder='Buyer email'
              nameId='buyerEmail'
            />
            <Input
              changeHandler={changeHandler}
              icon={addressIcon}
              type="text"
              placeholder='Shipping address'
              nameId='shippingAddress'
            />
          </div>
          <div className="input-group">
            <Input
              changeHandler={changeHandler}
              icon={cityIcon}
              type="text"
              placeholder='Shipping city'
              nameId='shippingCity'
            />
            <Input
              changeHandler={changeHandler}
              icon={regionIcon}
              type="text"
              placeholder='Shipping region'
              nameId='shippingRegion'
            />
          </div>
          <div className="input-group">
            <Input
              changeHandler={changeHandler}
              icon={countryIcon}
              type="text"
              placeholder='Shipping country'
              nameId='shippingCountry'
            />
            <select
              className="select-element"
              name="shippingMethod"
              defaultValue="default"
              onChange={(e) => handleDropdownSelect(e)}>
              <option
                disabled
                value="default"
              >Select an shipping method</option>
              {methods.map((method: TMethod, key) => (
                <option key={key} id={method.id}>
                  {method.name}
                </option>
              ))}
            </select>
            {/* <Input
              changeHandler={changeHandler}
              icon={methodIcon}
              type="text"
              placeholder='Shipping method'
              nameId='shippingMethod'
            /> */}
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
        <Link to="/orders">
          <button onClick={(e) => createOrderHandler(e)}>
            Create order
          </button>
        </Link>
      </div>
    </>
  );
};

export default OrderCreation;
