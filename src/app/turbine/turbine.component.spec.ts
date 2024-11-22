import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurbineComponent } from './turbine.component';

describe('TurbineComponent', () => {
  let component: TurbineComponent;
  let fixture: ComponentFixture<TurbineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurbineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
