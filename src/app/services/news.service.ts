import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news = [
    {
      title: "Kreunzungsstau schon wieder",
      message: "Warum ist schon wieder Stau an der Kreuzung an der Musterstraße",
      author: {
        name: "Hansy",
        id: 6969
      }
    },
    {
      title: "Schlagloch auf der Musterstraße",
      message: "Auf der Musterstraße höhe Karstadt ist ein großes Schlagloch",
      author: {
        name: "Hans",
        id: 7000
      }
    },
    {
      title: "Schloßpark",
      message: "Ich habe gesehen das der Schloßpark jetzt wieder richtig schön ist. Danke Stadt Osnabrück",
      author: {
        name: "Lena",
        id: 7001
      }
    }
  ];

  constructor() { }

  getAll(){
    return this.news;
  }
}
