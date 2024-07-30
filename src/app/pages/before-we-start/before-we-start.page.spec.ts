import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeforeWeStartPage } from './before-we-start.page';

describe('BeforeWeStartPage', () => {
  let component: BeforeWeStartPage;
  let fixture: ComponentFixture<BeforeWeStartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeWeStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
