import { TestBed, inject } from '@angular/core/testing';

import { MyFsRefService } from './my-fs-ref.service';

describe('MyFsRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyFsRefService]
    });
  });

  it('should be created', inject([MyFsRefService], (service: MyFsRefService) => {
    expect(service).toBeTruthy();
  }));
});
