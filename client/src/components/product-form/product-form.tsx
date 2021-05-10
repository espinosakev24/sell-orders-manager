import React, {useState} from 'react';
import './product-form.scss';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import TProduct from '../../dtos/product.type';
const swal: SweetAlert = _swal as any;

type TProductForm = {
  addProductToList(product: TProduct): void
}

const ProductForm: React.FunctionComponent<TProductForm> = (
    props: TProductForm,
) => {
  const [product, setProduct] = useState<TProduct>({
    productName: '',
    productQty: 0,
    productWeight: 0,
  });

  const onChangeHandler = (event: any) => {
    const {name, value} = event.target;

    setProduct({
      ...product,
      [name]: !isNaN(value) ? parseInt(value) : value,
    });
  };
  const pushProduct = () => {
    const {productName, productQty, productWeight} = product;

    if (!productName || !productQty || !productWeight) {
      swal({
        title: 'Can not add product',
        text: 'There are empty fields',
        icon: 'warning',
        dangerMode: true,
      });
      return;
    }
    props.addProductToList(product);
  };
  return (
    <section className="product-form-component">
      <div className="prodcut-name-container">
        <input
          placeholder="Product name"
          name="productName"
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className="prodcut-properties-container">
        <input
          placeholder="Weight"
          name="productWeight"
          type="number"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          placeholder="Quantity"
          name="productQty"
          type="number"
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <button
        className="add-product"
        onClick={pushProduct}
      >
        Add product
      </button>
    </section>
  );
};

export default ProductForm;
