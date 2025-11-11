import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesModel } from './employees.model';

describe('EmployeesModel', () => {
  let component: EmployeesModel;
  let fixture: ComponentFixture<EmployeesModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
