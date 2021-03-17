import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoimovelComponent } from './enderecoimovel.component';

describe('EnderecoimovelComponent', () => {
  let component: EnderecoimovelComponent;
  let fixture: ComponentFixture<EnderecoimovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoimovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoimovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
