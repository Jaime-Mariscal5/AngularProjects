import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoButonsComponent } from './demo-butons.component';

describe('DemoButonsComponent', () => {
  let component: DemoButonsComponent;
  let fixture: ComponentFixture<DemoButonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoButonsComponent]
    });
    fixture = TestBed.createComponent(DemoButonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
