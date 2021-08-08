import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredActionDataComponent } from './filtered-action-data.component';

describe('FilteredActionDataComponent', () => {
  let component: FilteredActionDataComponent;
  let fixture: ComponentFixture<FilteredActionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredActionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredActionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
