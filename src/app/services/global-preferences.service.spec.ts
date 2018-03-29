import { TestBed, inject } from '@angular/core/testing';

import { GlobalPreferencesService } from './global-preferences.service';

describe('GlobalPreferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalPreferencesService]
    });
  });

  it('should be created', inject([GlobalPreferencesService], (service: GlobalPreferencesService) => {
    expect(service).toBeTruthy();
  }));
});
