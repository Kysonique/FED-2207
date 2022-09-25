import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePicsComponent } from './movie-pics.component';

describe('MoviePicsComponent', () => {
  let component: MoviePicsComponent;
  let fixture: ComponentFixture<MoviePicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviePicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
