import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabvarComponent } from './nabvar/nabvar.component';


@NgModule({
  declarations: [NabvarComponent],
  exports: [NabvarComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
