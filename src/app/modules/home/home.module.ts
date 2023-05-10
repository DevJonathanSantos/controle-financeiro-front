import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PanelMenuModule
  ],exports:[
    HomeComponent
  ]
})
export class HomeModule { }
