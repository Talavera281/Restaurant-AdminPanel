import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './leo-login.component.html',
  styleUrls: ['./leo-login.component.css'],
})
export class LoginComponent {
  showPassword = false;

  constructor(private alertService: AlertService, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
    const passwordField: HTMLInputElement | null = document.querySelector('.password');
    if (passwordField) {
      passwordField.type = this.showPassword ? 'text' : 'password';
    }
  }

  onSubmit(event: Event, username: string, password: string) {
    event.preventDefault();
    this.hardcodeLogin(username, password);
  }

  hardcodeLogin(username: string, password: string) {
    if (username.trim() === '' || password.trim() === '') {
      this.alertService.showAlert('error', 'Por favor, ingresa un usuario y contraseña.', 3000);
      console.log("Campos vacíos");
      return;
    }

    if (username === 'admin' && password === '1234') {
      this.alertService.showAlert('success', 'Inicio de sesión exitoso. ¡Bienvenido!', 3000);
      this.router.navigate(['/welcome']);
    } else {
      this.alertService.showAlert('error', 'Usuario o contraseña incorrectos.', 3000);
    }
  }
}
