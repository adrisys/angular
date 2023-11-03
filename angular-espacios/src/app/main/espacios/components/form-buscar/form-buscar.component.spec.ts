import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscarComponent } from './form-buscar.component';

describe('FormBuscarComponent', () => {
  let component: FormBuscarComponent;
  let fixture: ComponentFixture<FormBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
