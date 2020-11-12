import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedTestModule } from 'ng-speed-test';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';



@NgModule({
  declarations: [HeaderComponent, LocationComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SpeedTestModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
