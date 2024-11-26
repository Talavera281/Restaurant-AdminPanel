import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './leo-login.component.html',
  styleUrls: ['./leo-login.component.css'],
})
export class LoginComponent {
  showPassword = false;

  constructor(private alertService: AlertService) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
    const passwordField: any = document.querySelector('.password');
    passwordField.type = this.showPassword ? 'text' : 'password';
  }

  onSubmit(event: Event) {
    event.preventDefault(); 
    this.hardcodeLogin();
  }

  hardcodeLogin() {
    this.alertService.showAlert('success', 'Welcome! You have successfully logged in.', 1500);
  }
}
