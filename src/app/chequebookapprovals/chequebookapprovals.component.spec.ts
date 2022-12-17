import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequebookapprovalsComponent } from './chequebookapprovals.component';

describe('ChequebookapprovalsComponent', () => {
  let component: ChequebookapprovalsComponent;
  let fixture: ComponentFixture<ChequebookapprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequebookapprovalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequebookapprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
