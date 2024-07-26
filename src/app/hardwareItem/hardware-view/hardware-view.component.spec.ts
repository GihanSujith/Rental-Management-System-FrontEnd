import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareViewComponent } from './hardware-view.component';

describe('HardwareViewComponent', () => {
  let component: HardwareViewComponent;
  let fixture: ComponentFixture<HardwareViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
