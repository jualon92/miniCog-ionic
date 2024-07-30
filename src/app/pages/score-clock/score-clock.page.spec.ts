import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreClockPage } from './score-clock.page';

describe('ScoreClockPage', () => {
  let component: ScoreClockPage;
  let fixture: ComponentFixture<ScoreClockPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreClockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
