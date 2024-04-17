import { TestBed } from '@angular/core/testing';

import { SenderserviceService } from './senderservice.service';

describe('SenderserviceService', () => {
  let service: SenderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
