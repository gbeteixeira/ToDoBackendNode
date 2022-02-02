import { Request, Response } from 'express';
import { startOfMonth, endOfMonth } from 'date-fns'
import { prismaClient } from '../database/prismaClient';

export class TaskMonthController {
  async month(request: Request, response: Response) {

    const { macaddress } = request.params;

    const current = new Date();

    await prismaClient.tasks.findMany({
      where: {
        when: {
          gte: startOfMonth(current),
          lte: endOfMonth(current)
        },
        macaddress: {
          in: macaddress
        }
      },
      orderBy: {
        when: 'asc'
      }
    }).then((result) => {
      return response.status(200).json(result);
    }).catch(err => {
      return response.status(500).json(err);
    })

  }
}