import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class TaskListController {
  async list(request: Request, response: Response) {

    const { macaddress } = request.params;

    await prismaClient.tasks.findMany({
      where: {
        macaddress: {
          equals: macaddress
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