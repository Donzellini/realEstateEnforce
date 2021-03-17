import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorcadastroComponent } from './vendedorcadastro.component';

describe('VendedorcadastroComponent', () => {
  let component: VendedorcadastroComponent;
  let fixture: ComponentFixture<VendedorcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorcadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
