import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherService } from 'src/app/model/services/openweather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  info : any;
  aux : any;
  coordinates: { latitude: string, longitude: string } = { latitude: '', longitude: '' };
  apiKey = 'afe5436942f7a34ee956d153e9cd7520';

  constructor(private actRoute : ActivatedRoute, private openweather : OpenWeatherService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(async (params) => {
      const id = params['id'];
      this.aux = await this.openweather.getById(id).toPromise();
      if (this.aux) {
        this.info = this.aux;
        console.log('Dados da API OpenWeather2:', this.info);
      }
    });
  }

  getWeatherIcon(iconCode: string): string {
    const iconBaseUrl = 'https://openweathermap.org/img/wn/';
    const iconUrl = `${iconBaseUrl}${iconCode}.png`;
    return iconUrl;
  }

  openURL () {
    window.open(this.info.Website, '_blank');
  }
}