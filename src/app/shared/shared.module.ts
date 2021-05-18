import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NabvarComponent } from './nabvar/nabvar.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationComponent } from './location/location.component';
import { PhotoProfileComponent } from './photo-profile/photo-profile.component';



@NgModule({
  declarations: [NabvarComponent, ProfileComponent, LocationComponent, PhotoProfileComponent],
  exports: [NabvarComponent, ProfileComponent, LocationComponent, PhotoProfileComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRUba1U6h54TALty2Tbac3y1-UJa_ea18'
    }),
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule { }
