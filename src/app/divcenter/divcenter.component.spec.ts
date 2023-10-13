import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivcenterComponent } from './divcenter.component';

describe('DivcenterComponent', () => {
  let component: DivcenterComponent;
  let fixture: ComponentFixture<DivcenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivcenterComponent]
    });
    fixture = TestBed.createComponent(DivcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
