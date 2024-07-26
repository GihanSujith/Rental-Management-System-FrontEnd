import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareRegisterComponent } from './hardware-register.component';

describe('HardwareRegisterComponent', () => {
  let component: HardwareRegisterComponent;
  let fixture: ComponentFixture<HardwareRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
