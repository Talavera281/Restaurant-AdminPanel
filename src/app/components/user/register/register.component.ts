import { Component } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router, private alertService: AlertService ) { }

  onSave() {
    this.alertService.showAlert('success', 'Los datos se han guardado correctamente.', 3000);
    this.router.navigate(['welcome/user']);

  }
}
