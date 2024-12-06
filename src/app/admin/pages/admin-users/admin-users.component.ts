import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-users-page',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersPage {

  activityItems = [
    {
      user: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      title: 'Admin',
      commit: 'Administracion Aplicacion',
      role: 'Admin',
      status: 'Completed',
      duration: '25s',
      date: '45 minutes ago',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Lindsay Walton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      title: 'Gerente General',
      commit: 'Administracion general',
      role: 'Admin',
      status: 'Completed',
      duration: '1m 32s',
      date: '3 hours ago',
      dateTime: '2023-01-23T09:00',
    },
    {
      user: {
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      title: 'Chef Ejecutivo',
      commit: 'Administracion/Cocina',
      role: 'Member',
      status: 'Error',
      duration: '1m 4s',
      date: '12 hours ago',
      dateTime: '2023-01-23T00:00',
    },
    {
      user: {
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      title: 'Sous Chef',
      commit: 'Cocina/Ordenes',
      role: 'Member',
      status: 'Completed',
      duration: '2m 15s',
      date: '2 days ago',
      dateTime: '2023-01-21T13:00',
    },
    {
      user: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      title: 'Chef de Partie',
      commit: 'Cocina',
      role: 'Member',
      status: 'Completed',
      duration: '1m 12s',
      date: '5 days ago',
      dateTime: '2023-01-18T12:34',
    },
    {
      user: {
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      title: 'Cocinero de Línea',
      commit: 'Cocina',
      role: 'Member',
      status: 'Completed',
      duration: '1m 56s',
      date: '1 week ago',
      dateTime: '2023-01-16T15:54',
    },
    {
      user: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      title: 'Ayudante de Cocina',
      commit: 'Cocina',
      role: 'Member',
      status: 'Completed',
      duration: '3m 45s',
      date: '1 week ago',
      dateTime: '2023-01-16T11:31',
    },
    {
      user: {
        name: 'Whitney Francis',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      title: 'Lavaplatos',
      commit: 'Cocina',
      role: 'Member',
      status: 'Completed',
      duration: '37s',
      date: '2 weeks ago',
      dateTime: '2023-01-09T08:45',
    },
  ];



}
