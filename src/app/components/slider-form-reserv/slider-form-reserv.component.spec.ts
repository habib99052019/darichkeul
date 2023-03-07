import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFormReservComponent } from './slider-form-reserv.component';

describe('SliderFormReservComponent', () => {
  let component: SliderFormReservComponent;
  let fixture: ComponentFixture<SliderFormReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderFormReservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderFormReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
