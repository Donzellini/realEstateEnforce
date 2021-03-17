import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompratipoComponent } from './compratipo.component';

describe('CompratipoComponent', () => {
  let component: CompratipoComponent;
  let fixture: ComponentFixture<CompratipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompratipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompratipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
