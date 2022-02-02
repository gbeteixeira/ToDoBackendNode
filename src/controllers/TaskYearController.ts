import { Request, Response } from 'express';
import { startOfYear, endOfYear } from 'date-fns'
import { prismaClient } from '../database/prismaClient';

export class TaskYearController {
  async year(request: Request, response: Response) {

    const { macaddress } = request.body;

    const current = new Date();

    await prismaClient.tasks.findMany({
      where: {
        when: {
          gte: startOfYear(current),
          lte: endOfYear(current)
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