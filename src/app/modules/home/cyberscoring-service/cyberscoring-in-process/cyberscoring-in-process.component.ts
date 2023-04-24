import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyberscoring-in-process',
  templateUrl: './cyberscoring-in-process.component.html',
  styleUrls: ['./cyberscoring-in-process.component.scss']
})
export class CyberscoringInProcessComponent implements OnInit {
  @Input() dataC: any;
  @Input() serviceCard: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
