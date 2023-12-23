import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTComponent } from './component-t.component';

describe('ComponentTComponent', () => {
  let component: ComponentTComponent;
  let fixture: ComponentFixture<ComponentTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTComponent]
    });
    fixture = TestBed.createComponent(ComponentTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
