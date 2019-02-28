import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefpersonalComponent } from './refpersonal.component';

describe('RefpersonalComponent', () => {
  let component: RefpersonalComponent;
  let fixture: ComponentFixture<RefpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
