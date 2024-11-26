import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertState = new BehaviorSubject<any>(null);
  alert$ = this.alertState.asObservable();
  private timeout: any;

  showAlert(type: 'success' | 'error' | 'info' | 'warning', message: string, duration: number = 5000) {
    this.alertState.next({ type, message });

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.clearAlert();
    }, duration);
  }

  clearAlert() {
    this.alertState.next(null);
  }
}
