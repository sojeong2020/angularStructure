import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocingComponent } from './invocing.component';

describe('InvocingComponent', () => {
  let component: InvocingComponent;
  let fixture: ComponentFixture<InvocingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvocingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvocingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
