import express from 'express';
import ordersRoute from './routes/orders.route';
import shippingMethodsRoute from './routes/shippingMethods.route';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/orders', ordersRoute);
app.use('/shippingmethods', shippingMethodsRoute);

app.listen(4000, () => {
  console.log('Server is up');
});