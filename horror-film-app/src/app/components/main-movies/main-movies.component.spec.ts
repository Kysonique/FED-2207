import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMoviesComponent } from './main-movies.component';

describe('MainMoviesComponent', () => {
  let component: MainMoviesComponent;
  let fixture: ComponentFixture<MainMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
