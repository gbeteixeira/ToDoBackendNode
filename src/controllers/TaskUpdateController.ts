import { Request, Response } from 'express';

import { prismaClient } from '../database/prismaClient';

export class TaskUpdateController {
  async update(request: Request, response: Response) {

    const { id } = request.params;
    const { macaddress, title, description, type, done, when } = request.body;

    await prismaClient.tasks.update({
      where: {
        id: id
      },
      data: {
        macaddress: macaddress,
        title: title,
        description: description,
        type: type,
        done: done,
        when: when,
      },
    }).then((result) => {
      return response.status(200).json(result);
    }).catch(err => {
      return response.status(500).json(err);
    })
  }
}