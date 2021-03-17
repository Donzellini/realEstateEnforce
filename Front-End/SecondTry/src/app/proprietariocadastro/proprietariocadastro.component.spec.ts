import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietariocadastroComponent } from './proprietariocadastro.component';

describe('ProprietariocadastroComponent', () => {
  let component: ProprietariocadastroComponent;
  let fixture: ComponentFixture<ProprietariocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietariocadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietariocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
