import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box2 } from './box2';

describe('Box2', () => {
  let component: Box2;
  let fixture: ComponentFixture<Box2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Box2],
    }).compileComponents();

    fixture = TestBed.createComponent(Box2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
