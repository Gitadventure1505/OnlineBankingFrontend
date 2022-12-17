import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositcashComponent } from './depositcash.component';

describe('DepositcashComponent', () => {
  let component: DepositcashComponent;
  let fixture: ComponentFixture<DepositcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositcashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
