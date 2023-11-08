import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OpenWeatherService, SearchType } from 'src/app/model/services/openweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})

export class WeatherPage implements OnInit {
  result: any = null;
  searchTerms : string = '';
  type : SearchType = SearchType.all;
  apiKey = 'afe5436942f7a34ee956d153e9cd7520';
  coordinates: { latitude: string, longitude: string } = { latitude: '', longitude: '' };

  constructor(private openweather : OpenWeatherService) { }

  search() {
    this.openweather.getAllWeatherData(this.searchTerms)
    .subscribe(data => {
      console.log('Dados da API OpenWeather:', data);
      this.result = data;
      // Armazena as coordenadas
      this.coordinates.latitude = data.coord.lat;
      this.coordinates.longitude = data.coord.lon;
    });
  }

  ngOnInit() {
  }

  getWeatherIcon(iconCode: string): string {
    const iconBaseUrl = 'https://openweathermap.org/img/wn/';
    const iconUrl = `${iconBaseUrl}${iconCode}.png`;
    return iconUrl;
  }

  getBackgroundImage() {
    const icon = this.result.weather[0].icon;
    console.log('Dados getBackground:', icon);
    if (icon === '01d' || icon === '01n' || icon === '02d' || icon === '02n') {
      return 'background-image-sunny';
    } else if (icon === '09d' || icon === '09n' || icon === '10d' || icon === '10n' || icon === '11d' || icon === '11n') {
      return 'background-image-rainy';
    } else if (icon === '03d' || icon === '03n' || icon === '04d' || icon === '04n') {
      return 'background-image-cloudy';
    } else if (icon == '13d' || icon === '13n' || icon === '50d' || icon === '50n') {
      return 'background-image-snowy';
    }
    return 'default-background'; // Defina uma classe padrão se nenhum caso corresponder
  }
  
}
