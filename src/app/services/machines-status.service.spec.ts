import { TestBed } from '@angular/core/testing';

import { MachinesStatusService } from './machines-status.service';

describe('MachinesStatusService', () => {
  let service: MachinesStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinesStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
