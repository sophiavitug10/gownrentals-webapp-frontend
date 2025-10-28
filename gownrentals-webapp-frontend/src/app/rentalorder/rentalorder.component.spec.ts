import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalorderComponent } from './rentalorder.component';

describe('RentalorderComponent', () => {
  let component: RentalorderComponent;
  let fixture: ComponentFixture<RentalorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
