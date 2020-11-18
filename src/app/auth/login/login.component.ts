import { Component, OnInit } from '@angular/core';
import { SpeedTestService } from 'ng-speed-test';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private _fb: FormBuilder, private _stc: SpeedTestService, private _router : Router) {
  }
  getSpeed() {
    this._stc.getMbps({
      iterations: 9,
    }).subscribe((speed) => { console.log('Your Speed is ' + speed + ' Mbps') });
  }
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      UserName: ['', Validators.required],
      UserPassword: ['', Validators.required],
    });
  }

  Login() {
    const username = this.loginForm.get('UserName').value;
    const password = this.loginForm.get('UserPassword').value;
    
    if (username === this.userName && password === this.password) {
      localStorage.setItem('userToken', this.accessToken);
      
      this._router.navigate(['/speedlocation']);
      this.loginForm.reset();
    }
  }
}
