import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate-sidebar',
  templateUrl: './activate-sidebar.component.html',
  styleUrls: ['./activate-sidebar.component.scss']
})
export class ActivateSidebarComponent implements OnInit {
  @Input() logo: string;
  @Input() textStep: string;
  constructor() { }

  ngOnInit() {
  }

}
