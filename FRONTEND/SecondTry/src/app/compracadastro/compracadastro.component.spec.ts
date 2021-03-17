import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompracadastroComponent } from './compracadastro.component';

describe('CompracadastroComponent', () => {
  let component: CompracadastroComponent;
  let fixture: ComponentFixture<CompracadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompracadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompracadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
