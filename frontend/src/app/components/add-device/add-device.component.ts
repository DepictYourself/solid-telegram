import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-add-device',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './add-device.component.html',
  styleUrl: './add-device.component.scss'
})
export class AddDeviceComponent {
  private fb = inject(FormBuilder);
  private deviceService = inject(DeviceService);

  form = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    ip: ['', [Validators.required, Validators.pattern(/^(\d{1,3}\.){3}\d{1,3}$/)]],
    location: ['', Validators.required]
  })

  handleSubmit() {
    if (this.form.invalid) return;

    this.deviceService.addDevice(this.form.value as {
      name: string;
      type: string;
      ip: string;
      location: string;
    }).subscribe(() => {
      this.form.reset();
      this.deviceService.fetchDevices();
    });
  }
}
