import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  alert: any;
  alertClass = '';
  iconClass = '';

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alert$.subscribe((alert) => {
      if (alert) {
        this.alert = alert;
        this.setAlertStyle(alert.type);
      } else {
        this.alert = null;
      }
    });
  }

  setAlertStyle(type: string) {
    switch (type) {
      case 'success':
        this.alertClass = 'bg-green-100 text-green-700 border-l-4 border-green-500';
        this.iconClass = 'fas fa-check-circle text-green-500';
        break;
      case 'error':
        this.alertClass = 'bg-red-100 text-red-700 border-l-4 border-red-500';
        this.iconClass = 'fas fa-times-circle text-red-500';
        break;
      case 'info':
        this.alertClass = 'bg-blue-100 text-blue-700 border-l-4 border-blue-500';
        this.iconClass = 'fas fa-info-circle text-blue-500'; 
        break;
      case 'warning':
        this.alertClass = 'bg-yellow-100 text-yellow-700 border-l-4 border-yellow-500';
        this.iconClass = 'fas fa-exclamation-triangle text-yellow-500';
        break;
    }
  }

  clearAlert() {
    this.alertService.clearAlert();
  }
}
