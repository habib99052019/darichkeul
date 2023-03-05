import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGlobaleComponent } from './form-globale.component';

describe('FormGlobaleComponent', () => {
  let component: FormGlobaleComponent;
  let fixture: ComponentFixture<FormGlobaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGlobaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGlobaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
