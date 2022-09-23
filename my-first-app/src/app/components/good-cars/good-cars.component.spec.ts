import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodCarsComponent } from './good-cars.component';

describe('GoodCarsComponent', () => {
  let component: GoodCarsComponent;
  let fixture: ComponentFixture<GoodCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
