import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEspaciosComponent } from './tabla-espacios.component';

describe('TablaEspaciosComponent', () => {
  let component: TablaEspaciosComponent;
  let fixture: ComponentFixture<TablaEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEspaciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
