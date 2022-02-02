import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class TaskLateController {
  async late(request: Request, response: Response) {

    const { macaddress } = request.body;

    const current = new Date();

    await prismaClient.tasks.findMany({
      where: {
        when: {
          lt: current
        },
        macaddress: {
          in: macaddress
        },
        done: {
          equals: false
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