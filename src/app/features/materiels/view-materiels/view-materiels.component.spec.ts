import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaterielsComponent } from './view-materiels.component';

describe('ViewMaterielsComponent', () => {
  let component: ViewMaterielsComponent;
  let fixture: ComponentFixture<ViewMaterielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMaterielsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMaterielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
