import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent {
  menuOpen: boolean = false;
  openMenu: string | null = null;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleSubMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
  }

  closeMenu() {
    this.menuOpen = false; 
  }

  logout() {
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }
}