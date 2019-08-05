import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductJumbotronComponent } from './product-jumbotron.component';

describe('ProductJumbotronComponent', () => {
  let component: ProductJumbotronComponent;
  let fixture: ComponentFixture<ProductJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
