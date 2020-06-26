import { Injectable } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification = [
    {
      message: "Tim hat dir eine Anfrage geschickt",
      date: Date.now(),
    },
    {
      message: "Neues Ereignis in der Kategorie Hobbys",
      date: Date.now() - this.getDateInMilliseconds(2),
    },
    {
      message: "Ihre Anfrage wurde abgelehnt",
      date: Date.now() - this.getDateInMilliseconds(10),
    },
    {
      message: "Sie nehmen am Ereigniss Tag der offenen Tür der Feuerwehr teil",
      date: Date.now() - this.getDateInMilliseconds(5),
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

  getDateInMilliseconds(day : number){
    return (1000*60*60*24*day)
  }
}

