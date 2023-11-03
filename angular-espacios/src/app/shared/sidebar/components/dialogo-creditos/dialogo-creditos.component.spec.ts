import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCreditosComponent } from './dialogo-creditos.component';

describe('DialogoCreditosComponent', () => {
  let component: DialogoCreditosComponent;
  let fixture: ComponentFixture<DialogoCreditosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoCreditosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
