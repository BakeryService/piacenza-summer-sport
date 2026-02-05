import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoandcostComponent } from './infoandcost.component';

describe('InfoandcostComponent', () => {
  let component: InfoandcostComponent;
  let fixture: ComponentFixture<InfoandcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoandcostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoandcostComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
