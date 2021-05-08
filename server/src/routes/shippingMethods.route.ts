import express, { Router, Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router: Router = express.Router();
const shippingMethodsEndpoint = process.env.SHIPPING_METHODS_ENDPOINT || '';
const config = {
  headers: {
    'x-api-key': process.env.API_KEY
  }
};

router.route('/').get(async (req: Request, res: Response) => {
  const response = await axios.get(shippingMethodsEndpoint, config);
  res.send(response.data);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const response = await axios.get(shippingMethodsEndpoint + '/' + req.params.id, config);
  res.send(response.data);
});

export default router;