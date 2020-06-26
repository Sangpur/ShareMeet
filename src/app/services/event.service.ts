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
    title: "Fußball!!!!",
    description: "Wir suchen Leute für ein paar Runden.",
    promised: false,
    pending: true,
    finished: false,
    own: false,
    memberCount: 18,
    memberMaxCount: 22,
    unansweredCount: 5,
    tags: [
      {
        name: "Fußball",
      },
      {
        name: "Sport",
      }
    ]
  },
  {
    title: "Tag der offnen Tür der Feuerwehr",
    description: "Wir laden alle Leute ein heute ein Blick in unser Feuerwehrhaus zu werfen",
    promised: false,
    pending: false,
    finished: false,
    own: false,
    memberCount: 30,
    memberMaxCount: 100,
    unansweredCount: 10,
    tags: [
      {
        name: "Feuerwehr",
      },
      {
        name: "Ehrenamt",
      }
    ]
  },
  {
    title: "Tennis Tunnier",
    description: "Wir veranstalten ein Tennis Tunnier und suchen noch Leute",
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
    title: "Fußball!!!!",
    description: "Wir suchen Leute für ein paar Runden.",
    promised: false,
    pending: false,
    finished: false,
    own: true,
    memberCount: 18,
    memberMaxCount: 22,
    unansweredCount: 5,
    tags: [
      {
        name: "Fußball",
      },
      {
        name: "Sport",
      }
    ]
  },
  {
    title: "Tennis Tunnier",
    description: "Wir veranstalten ein Tennis Tunnier und suchen noch Leute",
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

  createEvent(title, description, tags){
    this.events.push(
    {
      title: title,
      description: description,
      promised: false,
      pending: false,
      finished: false,
      own: true,
      memberCount: 1,
      memberMaxCount: 0,
      unansweredCount: 0,
      tags: tags
    });
  }
}
