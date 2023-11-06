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
  apiKey = 'cebcd482eda57fa9a6714c1c2ba91885';

  constructor(private openweather : OpenWeatherService) { }

  search() {
    this.openweather.getAllWeatherData(this.searchTerms)
      .subscribe(data => {
        console.log('Dados da API OpenWeather:', data); // Adicione esta linha
        this.result = data;
      });
  }

  ngOnInit() {
  }

  getWeatherIcon(iconCode: string): string {
    const iconBaseUrl = 'https://openweathermap.org/img/wn/';
    const iconUrl = `${iconBaseUrl}${iconCode}.png`;
    return iconUrl;
  }

  getCord(cordLatitude: string, cordLongitude : string) {
    const CordBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=';
    const cordUrl = `${CordBaseUrl}${cordLatitude}&lon=${cordLongitude}&appid={this.apiKey}`;
    console.log('Coordenadas:', cordUrl); // Adicione esta linha
    return cordUrl;
  }


}
