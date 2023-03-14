import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDHoteComponent } from './table-d-hote.component';

describe('TableDHoteComponent', () => {
  let component: TableDHoteComponent;
  let fixture: ComponentFixture<TableDHoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDHoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDHoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
