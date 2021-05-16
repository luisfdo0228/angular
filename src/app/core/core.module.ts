import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// import { UsersModule } from '../users/users.module';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
  // {
  //   path: 'usuarios',
  //   loadChildren: './../users/users.module#UsersModule'
  // }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
    // UsersModule
  ],
  exports: [
    SharedModule,
    // UsersModule
  ]
})
export class CoreModule { }
