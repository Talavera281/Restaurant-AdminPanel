import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { NgComponentOutlet } from '@angular/common';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
@Component({
  selector: 'app-registerplatillo',
  standalone: true,
  imports: [NgComponentOutlet, FormsModule], 
  templateUrl: './registerplatillo.component.html',
  styleUrls: ['./registerplatillo.component.css'] 
})
export class RegisterplatilloComponent {
  platillo = {
    name: '',
    price: null,
    receta: '',
    rating: null,
    stock: false,
    image: null,
  };

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    alert(file);
  }
  constructor(private router: Router, private alertService: AlertService ) { }
  submitPlatillo() {
    this.alertService.showAlert('success', 'Los datos se han guardado correctamente.', 3000);
    this.router.navigate(['welcome/platillos']);
  }
  }

