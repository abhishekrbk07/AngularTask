import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbackendComponent } from './parentbackend.component';

describe('ParentbackendComponent', () => {
  let component: ParentbackendComponent;
  let fixture: ComponentFixture<ParentbackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentbackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
