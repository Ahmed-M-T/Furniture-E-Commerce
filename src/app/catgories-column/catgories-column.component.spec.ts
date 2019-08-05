import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoriesColumnComponent } from './catgories-column.component';

describe('CatgoriesColumnComponent', () => {
  let component: CatgoriesColumnComponent;
  let fixture: ComponentFixture<CatgoriesColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatgoriesColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgoriesColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
