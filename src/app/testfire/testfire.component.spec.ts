import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfireComponent } from './testfire.component';

describe('TestfireComponent', () => {
  let component: TestfireComponent;
  let fixture: ComponentFixture<TestfireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestfireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
