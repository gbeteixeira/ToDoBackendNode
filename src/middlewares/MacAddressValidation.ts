import { Request, Response } from 'express';
import { ITask } from '../types';


export const MacAddressValidation = async (request: Request, response: Response, next: any) => {

  const { macaddress } = request.body as ITask;

  if (!macaddress)
    return response.status(400).json({
      error: 'Mecaddress is required!'
    })
  else {
    next();
  }
}