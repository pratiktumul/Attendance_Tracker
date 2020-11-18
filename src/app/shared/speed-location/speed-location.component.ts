import { Component, OnInit } from '@angular/core';
import { SpeedTestService } from 'ng-speed-test';

@Component({
  selector: 'app-speed-location',
  templateUrl: './speed-location.component.html',
  styleUrls: ['./speed-location.component.css']
})
export class SpeedLocationComponent implements OnInit {
  internetBandwith: number;
  latitude: number;
  longitude: number;
  constructor(private _stc: SpeedTestService) { }

  ngOnInit(): void {
    this.findMe();
    this.getSpeed();
  }

  getSpeed() {
    this._stc.getMbps({
    }).subscribe((speed) => { this.internetBandwith = Math.round(speed) ;  });
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position: Position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
  }

}
