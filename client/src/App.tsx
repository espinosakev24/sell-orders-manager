/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from './components/layout/layout.component';
import NavBar from './components/navbar/navbar.component';
import Home from './views/home/home.view';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import OrderCreation from './views/order-creation/order-creation.view';
import OrdersList from './views/orders-list/orders-list.view';
import OrderItem from './components/shared/order-item/order-item.component';
import OrderDetails from './views/order-details/order-details.view';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      {/* <OrderItem
        sellerStore='StoreX'
        shippingMethod='methodx'
        creationDate='12-08-02'
        externalOrderNumber={3054375560}
      /> */}
      <Router>
        <NavBar />
        <Layout>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/orders/create' component={OrderCreation} />
            <Route exact path='/orders' component={OrdersList} />
            <Route path='/orders/:id'>
              <OrderDetails />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
