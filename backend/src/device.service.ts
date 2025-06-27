import { Device, DeviceRepository, DeviceStatus } from "./repository";

export class DeviceService {
  constructor(private repo: DeviceRepository){
  }

  getDevices(): Device[] {
    const devices = this.repo.getAllDevices();
    const statuses: DeviceStatus[] = ['active', 'inactive', 'error'];
    for (const device of devices) {
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      device.status = randomStatus;
    }
    return devices;
  }

  createDevice(dto: Omit<Device, 'id' | 'status'>): Device {
    return this.repo.addDevice(dto);
  }

  removeDevice(id: string): boolean {
    return this.repo.removeDevice(id);
  }
}