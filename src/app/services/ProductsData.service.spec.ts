/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsDataService } from './ProductsData.service';

describe('Service: ProductsData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsDataService]
    });
  });

  it('should ...', inject([ProductsDataService], (service: ProductsDataService) => {
    expect(service).toBeTruthy();
  }));
});
