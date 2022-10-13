import { Component, OnInit } from '@angular/core';

import { Destinations } from './destination.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  destinations: Destinations[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
