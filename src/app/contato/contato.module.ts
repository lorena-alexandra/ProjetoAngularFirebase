import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContatoComponent } from './contato.component';



@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ContatoComponent]
})
export class ContatoModule { }
