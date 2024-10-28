import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinngpageComponent } from './landinngpage.component';

describe('LandinngpageComponent', () => {
  let component: LandinngpageComponent;
  let fixture: ComponentFixture<LandinngpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandinngpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandinngpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
