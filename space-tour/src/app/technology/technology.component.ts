import { Component, OnInit } from '@angular/core';

import { Technology } from './technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technology: Technology[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
