import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClowDrawingPage } from './clow-drawing.page';

describe('ClowDrawingPage', () => {
  let component: ClowDrawingPage;
  let fixture: ComponentFixture<ClowDrawingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClowDrawingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
