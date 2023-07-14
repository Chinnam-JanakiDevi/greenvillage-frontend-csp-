import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonflplantsComponent } from './nonflplants.component';

describe('NonflplantsComponent', () => {
  let component: NonflplantsComponent;
  let fixture: ComponentFixture<NonflplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonflplantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonflplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
