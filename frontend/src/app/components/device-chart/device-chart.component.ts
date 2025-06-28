import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Device } from '../../services/device.service';

interface StatusSnapshot {
  timestamp: string;
  active: number;
  inactive: number;
  error: number;
}

@Component({
  selector: 'app-device-chart',
  imports: [CommonModule, ChartModule],
  templateUrl: './device-chart.component.html',
  styleUrl: './device-chart.component.scss',
})
export class DeviceChartComponent {
  @Input() devices: Device[] = [];

  chartData: any;
  chartOptions: any;

  private history: StatusSnapshot[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[device-chart component] changes: ', changes);
    if (!this.devices || this.devices.length === 0) return;

    const active = this.devices.filter((d) => d.status === 'active').length;
    const inactive = this.devices.filter((d) => d.status === 'inactive').length;
    const error = this.devices.filter((d) => d.status === 'error').length;

    this.history.push({
      timestamp: new Date().toLocaleTimeString(),
      active,
      inactive,
      error,
    });

    // keep only the last 10 historic device data
    if (this.history.length > 10) {
      this.history.splice(0, 1);
    }
    this.updateChart();
  }

  private updateChart(): void {
    this.chartData = {
      labels: this.history.map((h) => h.timestamp),
      datasets: [
        {
          label: 'Active',
          data: this.history.map((h) => h.active),
          borderColor: 'green',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Inactive',
          data: this.history.map((h) => h.inactive),
          borderColor: 'gray',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Error',
          data: this.history.map((h) => h.error),
          borderColor: 'red',
          fill: false,
          tension: 0.4,
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
    };
  }
}
