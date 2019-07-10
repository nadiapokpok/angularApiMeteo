import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  temperature:number;
  condition: string;
  city: string;
  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.meteoService.getMeteo().subscribe(res => {
      console.log(res)
      this.city = res['name'];
      this.temperature = res['main']['temp'];
      this.condition = res['weather'][0]['description'];
    });
    this.temperature = 12;
  
  
  }

}
