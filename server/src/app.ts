import express from 'express';
import ordersRoute from './routes/orders.route';

const app = express();

app.use(express.json());

app.use('/orders', ordersRoute);

app.listen(4000, () => {
  console.log('Server is up');
});