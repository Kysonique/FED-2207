import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedansComponent } from './sedans.component';

describe('SedansComponent', () => {
  let component: SedansComponent;
  let fixture: ComponentFixture<SedansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
