import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoclientecadastroComponent } from './enderecoclientecadastro.component';

describe('EnderecoclientecadastroComponent', () => {
  let component: EnderecoclientecadastroComponent;
  let fixture: ComponentFixture<EnderecoclientecadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoclientecadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoclientecadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
