import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancocadastroComponent } from './bancocadastro.component';

describe('BancocadastroComponent', () => {
  let component: BancocadastroComponent;
  let fixture: ComponentFixture<BancocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancocadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
