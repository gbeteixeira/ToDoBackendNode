import { Request, Response } from 'express';
import { startOfDay, endOfDay } from 'date-fns'
import { prismaClient } from '../database/prismaClient';

export class TaskTodayController {
  async today(request: Request, response: Response) {

    const { macaddress } = request.params;

    const current = new Date();

    await prismaClient.tasks.findMany({
      where: {
        when: {
          gte: startOfDay(current),
          lte: endOfDay(current)
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