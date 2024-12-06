import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReserveComponent } from './admin-reserve.component';

describe('AdminReserveComponent', () => {
  let component: AdminReserveComponent;
  let fixture: ComponentFixture<AdminReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReserveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
