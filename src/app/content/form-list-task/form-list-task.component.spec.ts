import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListTaskComponent } from './form-list-task.component';

describe('FormListTaskComponent', () => {
  let component: FormListTaskComponent;
  let fixture: ComponentFixture<FormListTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormListTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
