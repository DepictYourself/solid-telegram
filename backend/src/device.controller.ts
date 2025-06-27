import { Request, Response } from 'express';
import { DeviceService } from './device.service';


export class DeviceController {
  
  constructor(private service: DeviceService) {

  }

  getDevices = (req: Request, res: Response) => {
    const devices = this.service.getDevices();
    res.json(devices);
  }

  createDevice = (req: Request, res: Response) => {
    const newDevice = this.service.createDevice(req.body);
    res.status(201).json(newDevice);
  }
  
  deleteDevice = (req: Request, res: Response) => {
    const success = this.service.removeDevice(req.params.id);
    res.status(success ? 204 : 404).end();
  }
  
}