import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveltipoComponent } from './imoveltipo.component';

describe('ImoveltipoComponent', () => {
  let component: ImoveltipoComponent;
  let fixture: ComponentFixture<ImoveltipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveltipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveltipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
