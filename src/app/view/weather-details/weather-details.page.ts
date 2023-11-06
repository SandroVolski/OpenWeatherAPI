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
  constructor(private actRoute : ActivatedRoute, private openweather : OpenWeatherService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.openweather.getById(id).subscribe(result => {
      this.info = result;
    });
  }

  openURL () {
    window.open(this.info.Website, '_blank');
  }
}
