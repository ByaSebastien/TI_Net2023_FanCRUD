import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanDetailComponent } from './fan-detail.component';

describe('FanDetailComponent', () => {
  let component: FanDetailComponent;
  let fixture: ComponentFixture<FanDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FanDetailComponent]
    });
    fixture = TestBed.createComponent(FanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
