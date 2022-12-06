import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelfieComponent } from './table-selfie.component';

describe('TableSelfieComponent', () => {
  let component: TableSelfieComponent;
  let fixture: ComponentFixture<TableSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
