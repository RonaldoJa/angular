import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguirreClientesComponent } from './aguirre-clientes.component';

describe('AguirreClientesComponent', () => {
  let component: AguirreClientesComponent;
  let fixture: ComponentFixture<AguirreClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguirreClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AguirreClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
