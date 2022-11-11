import { TestBed } from '@angular/core/testing';

import { ViewMaterielsService } from './view-materiels.service';

describe('ViewMaterielsService', () => {
  let service: ViewMaterielsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMaterielsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
