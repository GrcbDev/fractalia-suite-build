import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrendmicroService } from 'src/app/services/trendmicro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, tap } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/custom/modal/modal.component';
import { UserService } from 'src/app/services/user.service';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { environment } from 'src/environments/environment';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { TrenInfoModalComponent } from './info-modal/tren-info-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-trendmicro-service',
    templateUrl: './trendmicro-service.component.html',
    styleUrls: ['./trendmicro-service.component.scss']
})

export class TrendmicroServiceComponent implements OnInit {
    @Input() data: any;
    public staticContentUrl = environment.STATIC_CONTENT;
    public isloading;

    constructor(
        public userService: UserService,
        private sidebarService: SidebarService,
        public modalService: NgbModal,
        public translate: TranslateService,
        private router: Router,
        private trendmicroservice: TrendmicroService,
        private CDKModalService: CDKModalService,
    ) { }

    public async ngOnInit() {
        if (!this.data.longDesc) {
            this.loadServiceInfo();
        }
        if (this.trendmicroservice.trendmicro == null) {
            this.loadTrendmicroInformation();
        }
    }

    private loadServiceInfo() {
        const identityToken = this.userService.currentUserValue;
        this.sidebarService
            .getServiceInfo(this.data.id, identityToken.partnerId)
            .pipe(
                tap(res => { this.data = res; }),
                //tap(() => this.isloading = false)
            )
            .subscribe();
    }

    private loadTrendmicroInformation() {
        this.isloading = true;
         this.trendmicroservice.getTrendmicroLicense().pipe(
            tap(res => { this.trendmicroservice.trendmicro = res; }),
            //tap(res => { console.log(res); }),
            tap(() => this.isloading = false)
        ).subscribe();
    }

    public open(name: string, desc: string, icon: string) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.name = name;
        modalRef.componentInstance.desc = desc;
        modalRef.componentInstance.icon = icon;
    }

    public downloadTRE() {
        window.open(this.trendmicroservice.trendmicro.magiclink, "_blank");
    }
    openInfoModal(){
      const config = {
        modalClass: 'ds-modal-sm',
        position: 'center',
      };
      this.CDKModalService.open(TrenInfoModalComponent, config);

    }
}
