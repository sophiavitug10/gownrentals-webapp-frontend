import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GowncatalogComponent } from './gowncatalog.component';

describe('GowncatalogComponent', () => {
  let component: GowncatalogComponent;
  let fixture: ComponentFixture<GowncatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GowncatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GowncatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
