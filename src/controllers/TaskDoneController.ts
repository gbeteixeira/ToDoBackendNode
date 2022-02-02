import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class TaskDoneController {
  async done(request: Request, response: Response) {

    const { id, done } = request.params;

    await prismaClient.tasks.update({
      where: {
        id: id
      },
      data: {
        done: done === 'true' ? true : false,
      }
    }).then((result) => {
      return response.status(200).json(result);
    }).catch(err => {
      return response.status(500).json(err);
    })

  }
}