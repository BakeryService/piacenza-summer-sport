import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayworkoutComponent } from './dayworkout.component';

describe('DayworkoutComponent', () => {
  let component: DayworkoutComponent;
  let fixture: ComponentFixture<DayworkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayworkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayworkoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
