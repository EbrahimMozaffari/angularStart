import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouplingComponent } from './decoupling.component';

describe('DecouplingComponent', () => {
  let component: DecouplingComponent;
  let fixture: ComponentFixture<DecouplingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecouplingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecouplingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
