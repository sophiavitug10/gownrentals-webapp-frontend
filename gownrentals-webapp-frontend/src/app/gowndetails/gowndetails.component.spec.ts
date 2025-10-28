import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GowndetailsComponent } from './gowndetails.component';

describe('GowndetailsComponent', () => {
  let component: GowndetailsComponent;
  let fixture: ComponentFixture<GowndetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GowndetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GowndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
