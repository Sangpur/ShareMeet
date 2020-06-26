import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { FilterModalPage } from './filter-modal/filter-modal.page';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  constructor(private modalController: ModalController, private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

  async presentModal() {
    console.log("test");
    const modal = await this.modalController.create({
      component: FilterModalPage,
      cssClass: 'mymodal',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      animated: true,
      mode: 'ios',
      backdropDismiss: true,

  });
  return await modal.present();
  }
}
