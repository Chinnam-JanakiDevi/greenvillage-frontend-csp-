import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerComponent } from './summer.component';

describe('SummerComponent', () => {
  let component: SummerComponent;
  let fixture: ComponentFixture<SummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
