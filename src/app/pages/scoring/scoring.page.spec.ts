import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoringPage } from './scoring.page';

describe('ScoringPage', () => {
  let component: ScoringPage;
  let fixture: ComponentFixture<ScoringPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
