import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterSwitchComponent } from './login-register-switch.component';

describe('LoginRegisterSwitchComponent', () => {
  let component: LoginRegisterSwitchComponent;
  let fixture: ComponentFixture<LoginRegisterSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
