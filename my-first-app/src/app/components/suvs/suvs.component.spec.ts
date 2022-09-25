import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvsComponent } from './suvs.component';

describe('SuvsComponent', () => {
  let component: SuvsComponent;
  let fixture: ComponentFixture<SuvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuvsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
