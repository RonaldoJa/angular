import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguirreHeaderComponent } from './aguirre-header.component';

describe('AguirreHeaderComponent', () => {
  let component: AguirreHeaderComponent;
  let fixture: ComponentFixture<AguirreHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguirreHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AguirreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
