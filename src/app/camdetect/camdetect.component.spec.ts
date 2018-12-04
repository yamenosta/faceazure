import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamdetectComponent } from './camdetect.component';

describe('CamdetectComponent', () => {
  let component: CamdetectComponent;
  let fixture: ComponentFixture<CamdetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamdetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamdetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
