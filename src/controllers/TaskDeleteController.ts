import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class TaskDeleteController {
  async delete(request: Request, response: Response) {

    const { id } = request.params;

    await prismaClient.tasks.delete({
      where: {
        id: id
      }
    }).then((result) => {
      return response.status(200).json(result);
    }).catch(err => {
      return response.status(500).json(err);
    })

  }
}