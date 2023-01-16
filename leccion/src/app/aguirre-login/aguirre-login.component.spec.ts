import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguirreLoginComponent } from './aguirre-login.component';

describe('AguirreLoginComponent', () => {
  let component: AguirreLoginComponent;
  let fixture: ComponentFixture<AguirreLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguirreLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AguirreLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
