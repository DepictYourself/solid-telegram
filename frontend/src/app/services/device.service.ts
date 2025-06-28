import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Device {
  id: string;
  name: string;
  type: string;
  ip: string;
  status: DeviceStatus;
  location: string;
};

export type DeviceStatus = 'active' | 'inactive' | 'error'


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/devices`;

  devices = signal<Device[]>([]);

  fetchDevices(): void {
    this.http.get<Device[]>(this.baseUrl).subscribe({
      next: (data) => this.devices.set(data),
      error: (err) => console.error('Failed to fetch devices: ', err)
    })
  }

  addDevice(payload: Omit<Device, 'id' | 'status'>): Observable<Device> {
    return this.http.post<Device>(this.baseUrl, payload);
  }

  deleteDevice(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
