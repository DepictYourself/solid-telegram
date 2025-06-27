import { v4 as uuidv4 } from 'uuid';

// Possible statuses
export type DeviceStatus = 'active' | 'inactive' | 'error';

// Device model
export interface Device {
  id: string;
  name: string;
  type: string;
  ip: string;
  status: DeviceStatus;
  location: string;
}

const devices: Device[] = [];

export const getAllDevices = (): Device[] => {
  return devices;
}

export const addDevice = (
  data: Omit<Device, 'id' |'status'>
): Device => {
  const newDevice: Device = {
    id: uuidv4(),
    status: 'active',
    ...data
  };
  devices.push(newDevice);
  return newDevice;
}

export const removeDevice = (id: string): boolean => {
  const index = devices.findIndex((d) => d.id === id);
  if (index === -1) return false;
  devices.splice(index, 1);
  return true;
}

export const updateDeviceStatus = (id: string, status: DeviceStatus): boolean => {
  const device = devices.find((d) => d.id === id);
  if (!device) return false;
  device.status = status;
  return true;
};

// Optional: update all statuses randomly
export const randomizeStatuses = (): void => {
  const statuses: DeviceStatus[] = ['active', 'inactive', 'error'];
  for (const device of devices) {
    device.status = statuses[Math.floor(Math.random() * statuses.length)];
  }
};