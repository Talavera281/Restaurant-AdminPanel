import { Component } from '@angular/core';
import { DishesGridComponent } from '../../components/dishes-grid/dishes-grid.component';
import { DishesCategoryComponent } from '../../components/dishes-category/dishes-category.component';
import { DishesFilterComponent } from '../../components/dishes-filter/dishes-filter.component';
@Component({
  selector: 'admin-dishes-page',
  standalone: true,
  imports: [DishesGridComponent, DishesCategoryComponent, DishesFilterComponent],
  templateUrl: './admin-dishes.component.html',
  styleUrl: './admin-dishes.component.css'
})
export class AdminDishesPage {

}
