import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfieComponent } from './edit-selfie.component';

describe('EditSelfieComponent', () => {
  let component: EditSelfieComponent;
  let fixture: ComponentFixture<EditSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
