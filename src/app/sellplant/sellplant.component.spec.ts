import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellplantComponent } from './sellplant.component';

describe('SellplantComponent', () => {
  let component: SellplantComponent;
  let fixture: ComponentFixture<SellplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellplantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
