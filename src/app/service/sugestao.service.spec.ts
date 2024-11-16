import { TestBed } from '@angular/core/testing';

import { SugestaoService } from './sugestao.service';

describe('SugestaoService', () => {
  let service: SugestaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugestaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
