/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavegacaoService } from './navegacao.service';

describe('Service: Navegacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavegacaoService]
    });
  });

  it('should ...', inject([NavegacaoService], (service: NavegacaoService) => {
    expect(service).toBeTruthy();
  }));
});
