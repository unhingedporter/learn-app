import { TestBed } from '@angular/core/testing';

import { FilterSectionService } from './filter-section.service';

describe('FilterSectionService', () => {
  let service: FilterSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
