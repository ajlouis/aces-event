import { TestBed } from '@angular/core/testing';

import { MainEventIdResolverService } from './main-event-id-resolver.service';

describe('MainEventIdResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainEventIdResolverService = TestBed.get(MainEventIdResolverService);
    expect(service).toBeTruthy();
  });
});
