import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FileUtils } from 'src/app/utils/FileUtils';
import { RgpdService } from '../../../shared/rgpd.service';

@Component({
  selector: 'app-rgpd-success',
  templateUrl: './rgpd-success.component.html',
  styleUrls: ['./rgpd-success.component.scss']
})
export class RgpdSuccessComponent implements OnInit {
  isLoading = false;
  @Input() data: any;
  service: any;
  constructor(
    private rgpdService: RgpdService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.service = this.data.service;
  }

  generateDocument() {
    this.isLoading = true;
    this.rgpdService
      .generateRgpdModelDocument()
      .pipe(
        tap(() =>
        this.rgpdService
          .downloadRgpdModelDocument()
          .pipe(
            tap((receivedFile: any) => {
              FileUtils.downloadBase64File("application/vnd.openxmlformats-officedocument.wordprocessingml.document", receivedFile,  "rgpd.docx")
            }),
            tap(()=> this.isLoading = false)
          )
          .subscribe()
        ),
      )
      .subscribe();
  }

  finalize() {
    this.rgpdService.emitReload(true);
  }
}
