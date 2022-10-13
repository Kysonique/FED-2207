import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewListComponent } from './crew-list.component';

describe('CrewListComponent', () => {
  let component: CrewListComponent;
  let fixture: ComponentFixture<CrewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
