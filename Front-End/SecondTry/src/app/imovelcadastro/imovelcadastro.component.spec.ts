import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelcadastroComponent } from './imovelcadastro.component';

describe('ImovelcadastroComponent', () => {
  let component: ImovelcadastroComponent;
  let fixture: ComponentFixture<ImovelcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelcadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
