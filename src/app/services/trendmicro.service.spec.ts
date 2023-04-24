/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrendmicroService } from './trendmicro.service';

describe('Service: Trendmicro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrendmicroService]
    });
  });

  it('should ...', inject([TrendmicroService], (service: TrendmicroService) => {
    expect(service).toBeTruthy();
  }));
});
