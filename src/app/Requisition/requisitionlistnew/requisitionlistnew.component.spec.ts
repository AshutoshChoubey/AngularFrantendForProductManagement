import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionlistnewComponent } from './requisitionlistnew.component';

describe('RequisitionlistnewComponent', () => {
  let component: RequisitionlistnewComponent;
  let fixture: ComponentFixture<RequisitionlistnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionlistnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionlistnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
