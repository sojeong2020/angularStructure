import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginproviderComponent } from './loginprovider.component';

describe('LoginproviderComponent', () => {
  let component: LoginproviderComponent;
  let fixture: ComponentFixture<LoginproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
