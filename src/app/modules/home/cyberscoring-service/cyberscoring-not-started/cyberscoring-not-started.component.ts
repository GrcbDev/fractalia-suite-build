import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cyberscoring-not-started',
  templateUrl: './cyberscoring-not-started.component.html',
  styleUrls: ['./cyberscoring-not-started.component.scss']
})
export class CyberscoringNotStartedComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  @Input()  serviceCard?: boolean = false;
  constructor( ) { }

  ngOnInit(): void {
  }

  toggleValidate(event) {
    this.next.emit(event);
  }

}
