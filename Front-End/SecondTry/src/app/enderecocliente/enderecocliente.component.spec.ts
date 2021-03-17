import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoclienteComponent } from './enderecocliente.component';

describe('EnderecoclienteComponent', () => {
  let component: EnderecoclienteComponent;
  let fixture: ComponentFixture<EnderecoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
