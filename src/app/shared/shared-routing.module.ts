import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeedLocationComponent } from './speed-location/speed-location.component';

const routes: Routes = [{
  path: 'speedlocation', component : SpeedLocationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
