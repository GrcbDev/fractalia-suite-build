import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ats-results',
  templateUrl: './ats-results.component.html',
  styleUrls: ['./ats-results.component.scss']
})
export class AtsResultsComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {

  }

  }

