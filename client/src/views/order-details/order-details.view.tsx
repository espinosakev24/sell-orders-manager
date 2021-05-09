import React from 'react';
import './order-details.view.scss';
import {useParams} from 'react-router-dom';
type TOrderDetails = {
  id: string
}
const OrderDetails: React.FunctionComponent = () => {
  const {id} = useParams<TOrderDetails>();

  return (
    <div>
        Here goes the id: {id}
    </div>
  );
};

export default OrderDetails;
