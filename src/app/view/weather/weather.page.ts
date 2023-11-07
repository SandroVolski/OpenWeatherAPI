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
}
