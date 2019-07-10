import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  city: string;
  url: string;
  apiKey: string;
  //https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.API_KEY}
  constructor(private httpClient: HttpClient) {
    this.city = 'Paris';
    this.url = 'http://api.openweathermap.org/data/2.5/';
    this.apiKey = "e15bb8a9e3608aecd3b743a8c14e9804";
  }

  getMeteo(){
    return this.httpClient.get(`${this.url}weather?q=${this.city}&lang=fr&units=metric&APPID=${this.apiKey}`);
  }
}
