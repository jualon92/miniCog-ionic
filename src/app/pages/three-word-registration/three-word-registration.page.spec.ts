import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreeWordRegistrationPage } from './three-word-registration.page';

describe('ThreeWordRegistrationPage', () => {
  let component: ThreeWordRegistrationPage;
  let fixture: ComponentFixture<ThreeWordRegistrationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeWordRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
