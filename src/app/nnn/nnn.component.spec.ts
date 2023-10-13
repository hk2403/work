import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NnnComponent } from './nnn.component';

describe('NnnComponent', () => {
  let component: NnnComponent;
  let fixture: ComponentFixture<NnnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NnnComponent]
    });
    fixture = TestBed.createComponent(NnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
