import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPromtComponent } from './submit-promtcomponent';

describe('SubmitPromtComponentComponent', () => {
  let component: SubmitPromtComponent;
  let fixture: ComponentFixture<SubmitPromtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitPromtComponent]
    });
    fixture = TestBed.createComponent(SubmitPromtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
