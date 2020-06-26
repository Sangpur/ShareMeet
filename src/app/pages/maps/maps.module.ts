import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiY2FudGFhIiwiYSI6ImNrYnZkenBsYTA1NW4yem5xbXc4N2hhMXUifQ.q-VrZuaskqAKgfpf5ROgyw', // Optional, can also be set per map (accessToken input of mgl-map)
    })
  ],
  declarations: [MapsPage]
})
export class MapsPageModule {}
