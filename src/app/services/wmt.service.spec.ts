import { TestBed, inject } from '@angular/core/testing';

import { WmtService } from './wmt.service';

describe('WmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WmtService]
    });
  });

  it('should be created', inject([WmtService], (service: WmtService) => {
    expect(service).toBeTruthy();
  }));
});
