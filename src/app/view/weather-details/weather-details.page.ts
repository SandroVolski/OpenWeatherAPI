import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherService } from 'src/app/model/services/openweather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  info: any;
  aux : any;
  coordinates: { latitude: string, longitude: string } = { latitude: '', longitude: '' };
  apiKey = 'afe5436942f7a34ee956d153e9cd7520';

  constructor(private actRoute: ActivatedRoute, private openweather: OpenWeatherService) { }

  ngOnInit() {
  this.actRoute.params.subscribe(async (params) => {
    const latitude = params['latitude'];
    const longitude = params['longitude'];

    this.openweather.getCord(latitude, longitude).toPromise()
      .then(data => {
        this.info = data;
        console.log('Dentroo:', this.info);
      })
      .catch(error => {
        console.error('Erro ao obter dados de cordenadas:', error);
        // Lide com o erro, se necessário
      });
  });
}

  getWeatherIcon(iconCode: string): string {
    const iconBaseUrl = 'https://openweathermap.org/img/wn/';
    const iconUrl = `${iconBaseUrl}${iconCode}.png`;
    console.error('getWeatherIcon:', iconUrl);
    return iconUrl;
  }

  openURL() {
    window.open(this.info.Website, '_blank');
  }
}
