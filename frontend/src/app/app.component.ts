import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeviceTableComponent } from './components/device-table/device-table.component';
import { DeviceChartComponent } from './components/device-chart/device-chart.component';
import { DeviceService } from './services/device.service';
import { AddDeviceComponent } from './components/add-device/add-device.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    AddDeviceComponent,
    DeviceTableComponent,
    DeviceChartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private deviceService = inject(DeviceService);
  devices = computed(() => this.deviceService.devices());

  constructor() {
    this.deviceService.fetchDevices();

    setInterval(() => {
      this.deviceService.fetchDevices();
    }, 4000);
  }

  handleDelete = (id: string) => {
    this.deviceService.deleteDevice(id).subscribe(() => {
      this.deviceService.fetchDevices();
    });
  };
}
