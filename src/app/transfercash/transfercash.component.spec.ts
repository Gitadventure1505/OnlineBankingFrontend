import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfercashComponent } from './transfercash.component';

describe('TransfercashComponent', () => {
  let component: TransfercashComponent;
  let fixture: ComponentFixture<TransfercashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfercashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfercashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
