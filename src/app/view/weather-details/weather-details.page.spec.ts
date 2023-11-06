import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherDetailsPage } from './WeatherDetailsPage';

describe('WeatherDetailsPage', () => {
  let component: WeatherDetailsPage;
  let fixture: ComponentFixture<WeatherDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeatherDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
