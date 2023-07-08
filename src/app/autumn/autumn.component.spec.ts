import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutumnComponent } from './autumn.component';

describe('AutumnComponent', () => {
  let component: AutumnComponent;
  let fixture: ComponentFixture<AutumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
