import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platillos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css'],
})
export class PlatillosComponent {
  search: string = '';
  platillos = [
    {
      name: 'Tacos al Pastor',
      image: 'https://cdn.forbes.com.mx/2020/01/Pata-de-Elefante-640x360.jpg',
      rating: 4.5,
      price: 50,
      stock: true,
    },
    {
      name: 'Enchiladas Verdes',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8b/a5/8b/photo0jpg.jpg?w=1200&h=-1&s=1',
      rating: 4.0,
      price: 80,
      stock: false,
    },
    {
      name: 'Chiles Rellenos',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQ8Ko-xRNyKEnAf5TcLhoBtsThxr5KShzuGIHx3jP8Rx1ndDnK9klOKWzSS7q2jV5fjY&usqp=CAU',
      rating: 4.8,
      price: 70,
      stock: true,
    },
    {
      name: 'Mole Poblano',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCVg3Yg8pYs8ED-7KpyCAXpehf6rROvzunQ&s',
      rating: 5.0,
      price: 120,
      stock: true,
    },
  ];

  get filteredPlatillos() {
    return this.platillos.filter((platillo) =>
      platillo.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0); // Devuelve un arreglo de longitud igual al número entero de estrellas
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }

  addNew() {
    alert('Agregar nuevo platillo');
  }

  editPlatillo(name: string) {
    alert(`Editar platillo: ${name}`);
  }
}
