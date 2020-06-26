import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {

  freizeit = [];
  engagement = [];



  constructor(private router: Router, private modalCtrl: ModalController, private filterService: FilterService) { }

  ngOnInit() {
    this.freizeit = this.filterService.getAll().filter(x => x.category == "freizeit");
    this.engagement = this.filterService.getAll().filter(x => x.category == "engagement");
  }

  routeToFilter(title){
    this.router.navigate(['/tabs/filter', { category: title }]);
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  resetFilter() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
