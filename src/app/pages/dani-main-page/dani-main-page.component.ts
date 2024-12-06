import { Component } from '@angular/core';
import { DaniHeaderComponent } from '../../shared/dani-header/dani-header.component';

@Component({
  selector: 'dani-main-page',
  standalone: true,
  imports: [DaniHeaderComponent],
  templateUrl: './dani-main-page.component.html',
  styleUrl: './dani-main-page.component.css'
})
export class DaniMainPageComponent {

}
