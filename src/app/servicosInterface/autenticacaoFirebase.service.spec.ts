/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutenticacaoFirebaseService } from './autenticacaoFirebase.service';

describe('Service: AutenticacaoFirebase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoFirebaseService]
    });
  });

  it('should ...', inject([AutenticacaoFirebaseService], (service: AutenticacaoFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
