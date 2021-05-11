import express, { Router, Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import orderValidator from '../validations/order-validator';
dotenv.config();


// TODO - Calculations based on shipping method to send to the frontend
//        Delivering times estimations based on business days


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

router.route('/method/validate/:id').put(async (req: Request, res: Response) => {
  try {
    const response = await axios.get(shippingMethodsEndpoint + '/' + req.params.id, config);
    const isWeightAvailable = orderValidator.isWeightAvailable(
      response.data.rules.availability.byWeight,
      req.body.weight
    );
    if(!isWeightAvailable) {
      res.status(400).send({available: false});
      throw new Error('Weight not allowed');
    }
    res.status(200).send('Weight allowed');
  } catch(err) {
    console.log(err);
  }
});
export default router;