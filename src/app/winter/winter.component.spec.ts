import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterComponent } from './winter.component';

describe('WinterComponent', () => {
  let component: WinterComponent;
  let fixture: ComponentFixture<WinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
