import { TestBed } from '@angular/core/testing';

import { AttacksimulatorService } from '../modules/home/attack-simulator-service/shared/attacksimulator.service';

describe('AttacksimulatorService', () => {
  let service: AttacksimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttacksimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
