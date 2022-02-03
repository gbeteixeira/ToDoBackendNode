import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { isPast } from 'date-fns';
import { ITask } from '../types';


export const TaskValidation = async (request: Request, response: Response, next: any) => {

  const { macaddress, title, description, type, when } = request.body as ITask;

  if (!macaddress)
    return response.status(400).json({
      error: 'Mecaddress is required!'
    })
  else if (!type)
    return response.status(400).json({
      error: 'Type is required!'
    })
  else if (!title)
    return response.status(400).json({
      error: 'Title is required!'
    })
  else if (!description)
    return response.status(400).json({
      error: 'Description is required!'
    })
  else if (!when)
    return response.status(400).json({
      error: 'Day and Hour is required!'
    })
  else {

    let exist;

    if (request.params.id) {

      exist = await prismaClient.tasks.findMany({
        where: {
          when: new Date(when),
          macaddress: macaddress,
          NOT: [{ id: request.params.id }]
        },
      });

    } else {
      if (isPast(new Date(when)))
        return response.status(400).json({
          error: 'This day and hour is in the past!'
        })

      exist = await prismaClient.tasks.findMany({
        where: {
          when: new Date(when),
          macaddress: macaddress
        }
      });

    }

    if (exist.length) {
      return response.status(400).json({
        error: 'Exist a another task in the same day and hour'
      })
    }

    next();
  }
}