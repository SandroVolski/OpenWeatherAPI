import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export enum SearchType {
  all = '',
  city = 'city'
}

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather?';
  apiKey = 'cebcd482eda57fa9a6714c1c2ba91885';

  constructor(private http : HttpClient) {}

  getAllWeatherData(nomeCidade : string) : Observable<any>{
    return this.http.get(`${this.url}q=${encodeURI(nomeCidade)}&appid=${this.apiKey}&lang=pt_br&units=metric`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro na chamada à API OpenWeather:', error);
        return throwError('Ocorreu um erro ao obter os dados do tempo.');
      })
    );
  }

  getById(id: any){
    return this.http.get(`${this.url}id=${encodeURI(id)}}&appid=${this.apiKey}&lang=pt_br&units=metric`);
  }
}