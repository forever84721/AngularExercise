import { TestBed } from '@angular/core/testing';

import { FunctionButtonService } from './function-button.service';

describe('FunctionButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionButtonService = TestBed.get(FunctionButtonService);
    expect(service).toBeTruthy();
  });
});
