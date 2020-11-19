import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeedTestService } from 'ng-speed-test';

@Component({
  selector: 'app-speed-location',
  templateUrl: './speed-location.component.html',
  styleUrls: ['./speed-location.component.css']
})
export class SpeedLocationComponent implements OnInit {
  internetBandwith: number;
  latitude: string;
  longitude: string;
  empName: string;
  constructor(private _stc: SpeedTestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let empname = JSON.parse(atob(params.get('data')));
      this.empName = empname;
    });
    this.findMe();
    this.getSpeed();
  }

  getSpeed() {
    this._stc.getMbps({
    }).subscribe((speed) => { this.internetBandwith = Math.round(speed); });
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
    this.latitude = position.coords.latitude.toFixed(5);
    this.longitude = position.coords.longitude.toFixed(5);
  }

}
