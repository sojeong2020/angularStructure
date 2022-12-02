import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderloginComponent } from './providerlogin.component';

describe('ProviderloginComponent', () => {
  let component: ProviderloginComponent;
  let fixture: ComponentFixture<ProviderloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
