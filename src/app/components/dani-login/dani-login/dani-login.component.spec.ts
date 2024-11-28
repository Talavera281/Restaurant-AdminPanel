import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniLoginComponent } from './dani-login.component';

describe('DaniLoginComponent', () => {
  let component: DaniLoginComponent;
  let fixture: ComponentFixture<DaniLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaniLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaniLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
