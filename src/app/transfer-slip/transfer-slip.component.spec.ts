import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSlipComponent } from './transfer-slip.component';

describe('TransferSlipComponent', () => {
  let component: TransferSlipComponent;
  let fixture: ComponentFixture<TransferSlipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferSlipComponent]
    });
    fixture = TestBed.createComponent(TransferSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
