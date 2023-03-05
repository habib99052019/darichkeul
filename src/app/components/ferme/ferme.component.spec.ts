import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermeComponent } from './ferme.component';

describe('FermeComponent', () => {
  let component: FermeComponent;
  let fixture: ComponentFixture<FermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FermeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
