import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeoLoginComponent } from './leo-login.component';

describe('LeoLoginComponent', () => {
  let component: LeoLoginComponent;
  let fixture: ComponentFixture<LeoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeoLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
