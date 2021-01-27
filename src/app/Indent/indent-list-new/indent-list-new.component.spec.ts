import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentListNewComponent } from './indent-list-new.component';

describe('IndentListNewComponent', () => {
  let component: IndentListNewComponent;
  let fixture: ComponentFixture<IndentListNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentListNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
