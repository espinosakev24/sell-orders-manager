import express from 'express';
import ordersRoute from './routes/orders.route';
import shippingMethodsRoute from './routes/shippingMethods.route';

const app = express();

app.use(express.json());

app.use('/orders', ordersRoute);
app.use('/shippingmethods', shippingMethodsRoute);

app.listen(4000, () => {
  console.log('Server is up');
});