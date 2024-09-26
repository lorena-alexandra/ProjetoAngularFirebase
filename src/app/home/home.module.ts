import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { GaleriaModule } from '../galeria/galeria.module';
import { BannerModule } from '../shared/banner/banner.module';
import { RobsonModule } from '../shared/robson/robson.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    FooterModule, 
    BannerModule,
    RobsonModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
