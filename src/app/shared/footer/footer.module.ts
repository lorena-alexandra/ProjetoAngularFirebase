import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
