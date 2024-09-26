import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobsonComponent } from './robson.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RobsonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports :[
    RobsonComponent
  ]
})
export class RobsonModule { }
