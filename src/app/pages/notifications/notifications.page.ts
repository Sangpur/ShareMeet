import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notificationNew = []
  notificationOld = []

  constructor(private notificationService : NotificationService) { }

  ngOnInit() {
    this.loadNotifactions();
  }

  loadNotifactions(){
    this.notificationNew = this.notificationService.getNotification().filter(x => x.date >= (Date.now() - (1000*60*60*24*2.5)));
    this.notificationOld = this.notificationService.getNotification().filter(x => x.date < (Date.now() - (1000*60*60*24*2.5)));
  }
}
