import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Device } from '../../services/device.service';

@Component({
  selector: 'app-device-table',
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './device-table.component.html',
  styleUrl: './device-table.component.scss'
})
export class DeviceTableComponent {
  @Input() devices: Device[] = [];
  @Input() onDelete: (id: string) => void = () => {};
}
