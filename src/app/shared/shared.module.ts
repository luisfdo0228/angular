import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabvarComponent } from './nabvar/nabvar.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationComponent } from './location/location.component';

import { AgmCoreModule } from '@agm/core';
import { PhotoProfileComponent } from './photo-profile/photo-profile.component';

@NgModule({
  declarations: [NabvarComponent, ProfileComponent, LocationComponent, PhotoProfileComponent],
  exports: [NabvarComponent, ProfileComponent, LocationComponent, PhotoProfileComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRUba1U6h54TALty2Tbac3y1-UJa_ea18'
    }),
    CommonModule
  ]
})
export class SharedModule { }
