import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild2Component } from './home-child2.component';

describe('HomeChild2Component', () => {
  let component: HomeChild2Component;
  let fixture: ComponentFixture<HomeChild2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChild2Component]
    });
    fixture = TestBed.createComponent(HomeChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
