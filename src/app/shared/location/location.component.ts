import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.findMe();
  }
 findMe(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.showPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
 }
  showPosition(position: Position) {
    console.log(position)
  }

  
}
