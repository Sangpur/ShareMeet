import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news = [
    {
      title: "Lala1",
      message: "The best of lala",
      author: {
        name: "Hansy",
        id: 6969
      }
    },
    {
      title: "Lala2",
      message: "The best of lala",
      author: {
        name: "Hansy",
        id: 6969
      }
    },
    {
      title: "Lala3",
      message: "The best of lala",
      author: {
        name: "Hansy",
        id: 6969
      }
    },
    {
      title: "Lala4",
      message: "The best of lala",
      author: {
        name: "Hansy",
        id: 6969
      }
    },
    {
      title: "Lala5",
      message: "The best of lala",
      author: {
        name: "Elon",
        id: 42
      }
    },
    {
      title: "Lala6",
      message: "The best of lala",
      author: {
        name: "Hansy",
        id: 6969
      }
    },
  ];

  constructor() { }

  getAll(){
    return this.news;
  }
}
