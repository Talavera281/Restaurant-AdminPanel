import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesGridComponent } from './dishes-grid.component';

describe('DishesGridComponent', () => {
  let component: DishesGridComponent;
  let fixture: ComponentFixture<DishesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishesGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
