import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {

  event;
  emptyEvent = {
  title: "",
  date: "",
  starttime:"",
  endtime:"",
  adresseLine1: "",
  adresseLine2: "",
  adresseLine3:"",
  description:"",
  tags: [
    {name: "Tag1"},
    {name: "Tag2"},
    {name: "Tag3"},
    {name: "Tag4"},
    {name: "Tag5"},
    {name: "Tag6"}
  ]
}
  constructor(private eventService : EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = JSON.parse(JSON.stringify(this.emptyEvent));
  }

  saveEvent(){
    this.eventService.createEvent(this.event.title, this.event.description, this.event.tags);
    event = JSON.parse(JSON.stringify(this.emptyEvent));
    this.router.navigate(['/tabs/my-event'])
  }

}
