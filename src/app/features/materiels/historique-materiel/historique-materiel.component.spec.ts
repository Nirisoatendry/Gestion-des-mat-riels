import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueMaterielComponent } from './historique-materiel.component';

describe('HistoriqueMaterielComponent', () => {
  let component: HistoriqueMaterielComponent;
  let fixture: ComponentFixture<HistoriqueMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
