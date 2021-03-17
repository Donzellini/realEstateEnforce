import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoimovelcadastroComponent } from './enderecoimovelcadastro.component';

describe('EnderecoimovelcadastroComponent', () => {
  let component: EnderecoimovelcadastroComponent;
  let fixture: ComponentFixture<EnderecoimovelcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoimovelcadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoimovelcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
