import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedLocationComponent } from './speed-location.component';

describe('SpeedLocationComponent', () => {
  let component: SpeedLocationComponent;
  let fixture: ComponentFixture<SpeedLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
