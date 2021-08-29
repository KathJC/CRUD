import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoComponent } from './fondo.component';

describe('FondoComponent', () => {
  let component: FondoComponent;
  let fixture: ComponentFixture<FondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
