import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild1Component } from './home-child1.component';

describe('HomeChild1Component', () => {
  let component: HomeChild1Component;
  let fixture: ComponentFixture<HomeChild1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChild1Component]
    });
    fixture = TestBed.createComponent(HomeChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
