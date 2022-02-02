import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class TaskShowController {
  async show(request: Request, response: Response) {

    const { id } = request.params;

    await prismaClient.tasks.findUnique({
      where: {
        id: id
      }
    }).then((result) => {
      if (result)
        return response.status(200).json(result);
      else
        return response.status(404).json({ error: 'Task not found' });
    }).catch(err => {
      return response.status(500).json(err);
    })

  }
}