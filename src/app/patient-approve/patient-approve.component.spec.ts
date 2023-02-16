import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientApproveComponent } from './patient-approve.component';

describe('PatientApproveComponent', () => {
  let component: PatientApproveComponent;
  let fixture: ComponentFixture<PatientApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
