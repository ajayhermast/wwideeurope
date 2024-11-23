import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbussinessComponent } from './ourbussiness.component';

describe('OurbussinessComponent', () => {
  let component: OurbussinessComponent;
  let fixture: ComponentFixture<OurbussinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurbussinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurbussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
