import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule,RouterOutlet],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users = [
    {
      Nombre: 'John Doe',
      Puesto: 'Director',
      Estado: 'Activo',
      Rol: 'Administrador',
      image: 'https://c0.klipartz.com/pngpicture/340/946/gratis-png-avatar-usuario-computadora-iconos-desarrollador-de-software-avatar-thumbnail.png',
    },
    {
      Nombre: 'Kenet Gaona',
      Puesto: 'Jefe de meseros',
      Estado: 'Desactivado',
      Rol: 'Mesero',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRKDEmG0UI0DXcHC_E0WHi4hkiwL0TWXcT-WZyBukSo7RGZ2FCO5lDea43GUMcMDwe1A&usqp=CAU',
    },
    {
      Nombre: 'Emily Davis',
      Puesto: 'Cajero principal',
      Estado: 'Activo',
      Rol: 'Cajero',
      image: 'https://e7.pngegg.com/pngimages/519/698/png-clipart-user-profile-avatar-scalable-graphics-icon-girls-face-fashion-girl.png',
    },
  ];
  constructor(private router: Router) {}
  navigateTo() {
  this.router.navigate(['welcome/registeruser']);
  }
}
