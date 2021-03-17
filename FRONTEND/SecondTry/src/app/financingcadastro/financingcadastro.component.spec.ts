import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingcadastroComponent } from './financingcadastro.component';

describe('FinancingcadastroComponent', () => {
  let component: FinancingcadastroComponent;
  let fixture: ComponentFixture<FinancingcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancingcadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
