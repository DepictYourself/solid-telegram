import express from 'express';
import { DeviceRepository } from './repository';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';


const router = express.Router();

// DI here
const repo = new DeviceRepository();
const service = new DeviceService(repo);
const controller = new DeviceController(service);

router.get('/', controller.getDevices);
router.post('/', controller.createDevice);
router.delete('/:id', controller.deleteDevice);

export default router;