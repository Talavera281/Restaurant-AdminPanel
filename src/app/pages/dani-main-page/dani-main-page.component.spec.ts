import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniMainPageComponent } from './dani-main-page.component';

describe('DaniMainPageComponent', () => {
  let component: DaniMainPageComponent;
  let fixture: ComponentFixture<DaniMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaniMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaniMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
