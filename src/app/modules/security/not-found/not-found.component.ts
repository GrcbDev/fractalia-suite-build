import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor(
    public partnerService: PartnerService,
  ) { }

  ngOnInit() {
  }

}
