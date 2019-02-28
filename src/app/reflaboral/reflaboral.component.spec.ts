import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflaboralComponent } from './reflaboral.component';

describe('ReflaboralComponent', () => {
  let component: ReflaboralComponent;
  let fixture: ComponentFixture<ReflaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
