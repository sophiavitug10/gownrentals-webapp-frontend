import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GowncategoryComponent } from './gowncategory.component';

describe('GowncategoryComponent', () => {
  let component: GowncategoryComponent;
  let fixture: ComponentFixture<GowncategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GowncategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GowncategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
