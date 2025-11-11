import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingModel } from './training.model';

describe('TrainingModel', () => {
  let component: TrainingModel;
  let fixture: ComponentFixture<TrainingModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
