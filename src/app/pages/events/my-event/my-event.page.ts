import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.page.html',
  styleUrls: ['./my-event.page.scss'],
})
export class MyEventPage implements OnInit {

  
promisedEvents = [];
calledOffEvents = [];
finishedEvents = [];
pending = [];
ownEvents = [];
finishedownEvents = [];

participationStatus = true;
pendingStatus = false;
eventStatus = false;

  constructor(private eventService : EventService) { };

  ngOnInit() {
    this.loadEvents();
  };

  loadEvents(){
    this.promisedEvents = this.eventService.getAllEvents().filter(x => x.promised == true);
    this.calledOffEvents = this.eventService.getAllEvents().filter(x => x.promised == false && x.own == false && x.finished == false && x.pending == false);
    this.finishedEvents = this.eventService.getAllEvents().filter(x => x.finished == true && x.own == false);
    this.pending = this.eventService.getAllEvents().filter(x => x.pending == true);
    this.ownEvents = this.eventService.getAllEvents().filter(x => x.own == true && x.finished == false);
    this.finishedownEvents = this.eventService.getAllEvents().filter(x => x.own == true && x.finished == true);
  };

  switchParticipationStatus(){
    this.participationStatus = true;
    this.pendingStatus = false;
    this.eventStatus = false;
  };
  switchPendingStatus(){
    this.participationStatus = false;
    this.pendingStatus = true;
    this.eventStatus = false;
  };
  switchEventStatus(){
    this.participationStatus = false;
    this.pendingStatus = false;
    this.eventStatus = true;
  };
}
