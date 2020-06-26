import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification = [
    {
      message: "Hallo1",
      date: Date.now(),
    },
    {
      message: "Hallo2",
      date: Date.now() - (1000*60*60*24*2),
    },
    {
      message: "Hallo3",
      date: Date.now() - (1000*60*60*24*10),
    },
    {
      message: "Hallo4",
      date: Date.now() - (1000*60*60*24*5),
    },
    {
      message: "Hallo5",
      date: Date.now() - (1000*60*60*24*3),
    }
  ];
  constructor() { }

  getNotification(){
    return this.notification;
  };

  getDate(x){
    let date = new Date(x);
    return date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
  }
}
