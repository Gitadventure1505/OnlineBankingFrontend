import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawcashComponent } from './withdrawcash.component';

describe('WithdrawcashComponent', () => {
  let component: WithdrawcashComponent;
  let fixture: ComponentFixture<WithdrawcashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawcashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
