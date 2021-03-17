import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompratipocadastroComponent } from './compratipocadastro.component';

describe('CompratipocadastroComponent', () => {
  let component: CompratipocadastroComponent;
  let fixture: ComponentFixture<CompratipocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompratipocadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompratipocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
