import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlplantsComponent } from './flplants.component';

describe('FlplantsComponent', () => {
  let component: FlplantsComponent;
  let fixture: ComponentFixture<FlplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlplantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
