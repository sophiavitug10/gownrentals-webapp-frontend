import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GownCatalogComponent } from './gowncatalog.component';

describe('GowncatalogComponent', () => {
  let component: GownCatalogComponent;
  let fixture: ComponentFixture<GownCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GownCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GownCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
