import { Component, OnInit } from '@angular/core';
import { SpeedTestService } from 'ng-speed-test';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: string = "tumul";
  password: string = "123";
  accessToken: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ikx99GNL4JwGk13MlikdaMFXhcPiamhnKtfQEsoNauA";
  constructor(private fb: FormBuilder, private _stc: SpeedTestService) {
    this.getSpeed();
  }
  getSpeed() {
    this._stc.getMbps({
      iterations: 20,
    }).subscribe((speed) => { console.log('Your Speed is ' + speed + ' Mbps') });
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      UserPassword: ['', Validators.required],
    });
  }

  Login() {
    const username = this.loginForm.get('UserName').value;
    const password = this.loginForm.get('UserPassword').value;
    console.log(this.loginForm.value);
    if (username === this.userName && password === this.password) {
      localStorage.setItem('userToken', this.accessToken);
      console.log(localStorage.getItem('userToken'));
      this.loginForm.reset();
      this.findMe();
    }
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
    console.log(position.coords.latitude + " " + position.coords.longitude)
  }


}
