import express from 'express';
import { createDevice, deleteDevice, getDevices } from './deviceController';

const router = express.Router();

router.get('/', getDevices);
router.post('/', createDevice);
router.delete('/:id', deleteDevice);

export default router;