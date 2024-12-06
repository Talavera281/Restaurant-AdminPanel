import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterplatilloComponent } from './registerplatillo.component';

describe('RegisterplatilloComponent', () => {
  let component: RegisterplatilloComponent;
  let fixture: ComponentFixture<RegisterplatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterplatilloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterplatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
