import { Component, OnInit } from '@angular/core';
import { SpeedTestService } from 'ng-speed-test';

@Component({
  selector: 'app-speed-location',
  templateUrl: './speed-location.component.html',
  styleUrls: ['./speed-location.component.css']
})
export class SpeedLocationComponent implements OnInit {

  constructor(private _stc: SpeedTestService) {}

  ngOnInit(): void {
    this.findMe();
    this.getSpeed();
  }

  getSpeed() {
    this._stc.getMbps({
      iterations: 9,
    }).subscribe((speed) => { console.log('Your Speed is ' + speed + ' Mbps') });
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
    console.log(" This is your latitude " + position.coords.latitude + " This is your longitude " + position.coords.longitude)
  }

}
