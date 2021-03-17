import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveltipocadastroComponent } from './imoveltipocadastro.component';

describe('ImoveltipocadastroComponent', () => {
  let component: ImoveltipocadastroComponent;
  let fixture: ComponentFixture<ImoveltipocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveltipocadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveltipocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
