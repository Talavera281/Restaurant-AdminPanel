import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesFilterComponent } from './dishes-filter.component';

describe('DishesFilterComponent', () => {
  let component: DishesFilterComponent;
  let fixture: ComponentFixture<DishesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishesFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
