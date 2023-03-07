import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGlobalComponent } from './form-global.component';

describe('FormGlobalComponent', () => {
  let component: FormGlobalComponent;
  let fixture: ComponentFixture<FormGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
