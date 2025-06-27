import { v4 as uuidv4 } from 'uuid';


export type DeviceStatus = 'active' | 'inactive' | 'error';


export interface Device {
  id: string;
  name: string;
  type: string;
  ip: string;
  status: DeviceStatus;
  location: string;
}

export class DeviceRepository {
  private devices: Device[] = [
    {
      id: "364cb270-98d3-46b3-8355-6b6b7b9b08ae",
      name: "laptop001",
      type: "PC",
      ip: "192.168.1.100",
      status: 'active',
      location: "office-1"
    },
    {
      id: "06524a47-ac0f-4026-8f07-2c822188649d",
      name: "phone123",
      type: "Phone",
      ip: "192.168.1.101",
      status: 'active',
      location: "offsite"
    }
  ];

  getAllDevices() {
    return this.devices;
  }

  addDevice = (
    data: Omit<Device, 'id' | 'status'>
  ): Device => {
    const newDevice: Device = {
      id: uuidv4(),
      status: 'active',
      ...data
    };
    this.devices.push(newDevice);
    return newDevice;
  }

  removeDevice = (id: string): boolean => {
    const index = this.devices.findIndex((d) => d.id === id);
    if (index === -1) return false;
    this.devices.splice(index, 1);
    return true;
  }

  updateDeviceStatus = (id: string, status: DeviceStatus): boolean => {
    const device = this.devices.find((d) => d.id === id);
    if (!device) return false;
    device.status = status;
    return true;
  };

}