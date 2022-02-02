import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class TaskController {
  async create(request: Request, response: Response) {

    const { macaddress, title, description, type, when } = request.body;

    await prismaClient.tasks.create({
      data: {
        macaddress,
        title,
        description,
        type,
        when
      }
    }).then((result) => {
      return response.status(201).json(result);
    }).catch(err => {
      return response.status(500).json(err);
    })

  }
}