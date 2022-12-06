import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelfieComponent } from './list-selfie.component';

describe('ListSelfieComponent', () => {
  let component: ListSelfieComponent;
  let fixture: ComponentFixture<ListSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
