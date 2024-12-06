import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniHeaderComponent } from './dani-header.component';

describe('DaniHeaderComponent', () => {
  let component: DaniHeaderComponent;
  let fixture: ComponentFixture<DaniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaniHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
