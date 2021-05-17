import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabvarComponent } from './nabvar/nabvar.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [NabvarComponent, ProfileComponent, LocationComponent],
  exports: [NabvarComponent, ProfileComponent, LocationComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
