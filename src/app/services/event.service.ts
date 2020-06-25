import { Injectable } from '@angular/core';
import { TemplateBindingParseResult } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
events = [
  {
    title: "Tennis Tunnier",
    description: "Wir veranstalten ein Tennis Tunnier und suchen noch Leute",
    promised: true,
    pending: false,
    finished: false,
    own: false,
    memberCount: 10,
    memberMaxCount: 20,
    unansweredCount: 10,
    tags: [
      {
        name: "Tennis",
      },
      {
        name: "Sport",
      },
      {
        name: "Tunnier",
      }
    ]
  },
  {
    title: "test1",
    description: "somethinge",
    promised: false,
    pending: true,
    finished: false,
    own: false,
    memberCount: 10,
    memberMaxCount: 20,
    unansweredCount: 10,
    tags: [
      {
        name: "Tennis",
      },
      {
        name: "Sport",
      },
      {
        name: "Tunnier",
      }
    ]
  },
  {
    title: "test11",
    description: "somethinge",
    promised: false,
    pending: false,
    finished: false,
    own: false,
    memberCount: 10,
    memberMaxCount: 20,
    unansweredCount: 10,
    tags: [
      {
        name: "Tennis",
      },
      {
        name: "Sport",
      },
      {
        name: "Tunnier",
      }
    ]
  },
  {
    title: "test2",
    description: "somethinge",
    promised: false,
    pending: false,
    finished: true,
    own: false,
    memberCount: 10,
    memberMaxCount: 20,
    unansweredCount: 10,
    tags: [
      {
        name: "Tennis",
      },
      {
        name: "Sport",
      },
      {
        name: "Tunnier",
      }
    ]
  },
  {
    title: "test3",
    description: "somethinge",
    promised: false,
    pending: false,
    finished: false,
    own: true,
    memberCount: 10,
    memberMaxCount: 20,
    unansweredCount: 10,
    tags: [
      {
        name: "Tennis",
      },
      {
        name: "Sport",
      },
      {
        name: "Tunnier",
      }
      
    ]
  },
  {
    title: "test4",
    description: "somethinge",
    promised: false,
    pending: false,
    finished: true,
    own: true,
    memberCount: 10,
    memberMaxCount: 20,
    unansweredCount: 10,
    tags: [
      {
        name: "Tennis",
      },
      {
        name: "Sport",
      },
      {
        name: "Tunnier",
      }
      
    ]
  }
]
  constructor() { }

  getAllEvents(){
    return this.events
  }
}
