import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEliminarComponent } from './dialogo-eliminar.component';

describe('DialogoEliminarComponent', () => {
  let component: DialogoEliminarComponent;
  let fixture: ComponentFixture<DialogoEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
