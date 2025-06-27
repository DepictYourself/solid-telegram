import { Request, Response } from 'express';
import { getAllDevices, randomizeStatuses } from './repository';

export const getDevices = (req: Request, res: Response) => {
  randomizeStatuses();
  res.json(getAllDevices())
}

export const createDevice = (req: Request, res: Response) => {
  
}

export const deleteDevice = (req: Request, res: Response) => {
  
}