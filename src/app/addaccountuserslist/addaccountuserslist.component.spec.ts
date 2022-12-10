import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccountuserslistComponent } from './addaccountuserslist.component';

describe('AddaccountuserslistComponent', () => {
  let component: AddaccountuserslistComponent;
  let fixture: ComponentFixture<AddaccountuserslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaccountuserslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddaccountuserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
