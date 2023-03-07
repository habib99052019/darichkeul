import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRoomDetailsComponent } from './form-room-details.component';

describe('FormRoomDetailsComponent', () => {
  let component: FormRoomDetailsComponent;
  let fixture: ComponentFixture<FormRoomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRoomDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
