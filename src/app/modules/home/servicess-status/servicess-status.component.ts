import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { filter, tap } from 'rxjs/operators';
import { CDKModalService } from 'src/app/components/cdk-modal/services/cdk-modal.service';
import { SidebarService } from '../../shared/sidebar-menu.service';
import { ServiceStatusModalComponent } from './service-status-modal/service-status-modal.component';
import { ServiceStatusLevel } from './service-status-modal/shared/service-status-level';

@Component({
  selector: 'app-servicess-status',
  templateUrl: './servicess-status.component.html',
  styleUrls: ['./servicess-status.component.scss']
})
export class ServicessStatusComponent implements OnInit, AfterViewInit {
  pressed: boolean;
  startx: any;

  private carrouselContainer: ElementRef;
  @ViewChild('carrouselContainer', { static: false }) set carrouselContainerContent(content: ElementRef) {
     if(content) {
         this.carrouselContainer = content;
     }
  }

  private carrousel: ElementRef;
  @ViewChild('carrousel', { static: false }) set carrouselContent(content: ElementRef) {
     if(content) {
         this.carrousel = content;
     }
  }


  private innerCarrousel: ElementRef;
  @ViewChild('innerCarrousel', { static: false }) set innerCarrouselContent(content: ElementRef) {
     if(content) {
         this.innerCarrousel = content;
     }
  }

  private prevMove: ElementRef;
  @ViewChild('prevMove', { static: false }) set prevMoveContent(content: ElementRef) {
     if(content) {
         this.prevMove = content;
     }
  }

  private nextMove: ElementRef;
  @ViewChild('nextMove', { static: false }) set nextMoveContent(content: ElementRef) {
     if(content) {
         this.nextMove = content;
     }
  }

  buttonLongInterval: any;
  timeToMove = 20;
  jumbotronData: any;
  initCarrousel = false;
  oneCardWith = 80;
  afterViewInit = false;
  maxAvailableSpace = 540;
  isloading = true;
  showJumbotrom = false;

  transform = 0;
  initialPosition:any = null;
  @Output() finalized: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private cdkModalService: CDKModalService,
    public modalService: NgbModal,
    private sidebarServices: SidebarService,
    private router: Router,
    private translate: TranslateService
  ) {

  }

  ngOnInit() {
    this.loadJumbotronData();
    this.cleanEventListener();
    this.watchRefreshJumbotrom()
  }

  ngAfterViewInit(): void {
    window.addEventListener("resize", e => {
      this.availableSpaceCalculate();
    });
  }

  availableSpaceCalculate(){
    if(this.carrousel && this.carrousel.nativeElement) {
      const availableSpace = this.carrousel.nativeElement.offsetWidth - 50;
      const spaceTotal = this.oneCardWith * this.jumbotronData.services.length;
      if(spaceTotal < availableSpace) {
        this.initCarrousel = false;
        this.prevMove.nativeElement.style.display = 'none';
        this.nextMove.nativeElement.style.display = 'none';
        this.carrouselContainer.nativeElement.style.borderLeft = 'none';
        this.innerCarrousel.nativeElement.style.transform = `translateX(0px)`;
      } else{
        this.initCarrousel = true;
        if(document.body.clientWidth <= 751) {
          this.prevMove.nativeElement.style.display = 'none';
          this.nextMove.nativeElement.style.display = 'none';
          this.carrouselContainer.nativeElement.style.borderLeft = 'none';
          this.innerCarrousel.nativeElement.style.transform = `translateX(0px)`;
        } else {
          this.carrouselContainer.nativeElement.style.borderLeft = '1px solid #BCC4D4';
          this.prevMove.nativeElement.style.display = 'block';
          this.nextMove.nativeElement.style.display = 'block';
          this.carrousel.nativeElement.style.cursor = 'default';
          this.innerCarrousel.nativeElement.style.transform = `translateX(0px)`;
          // this.innerCarrousel.nativeElement.style.left = `0px`;
        }

      }
    }

  }

  cleanEventListener() {
    if (window.PointerEvent) {
      window.removeEventListener('pointerdown', null);
      window.removeEventListener('pointermove', null);
      window.removeEventListener('pointerup', null);
    } else {
      window.removeEventListener('touchdown', null);
      window.removeEventListener('touchmove', null);
      window.removeEventListener('touchup', null);
      window.removeEventListener('mousedown', null);
      window.removeEventListener('mousemove', null);
      window.removeEventListener('mouseup', null);
    }
    if(this.carrousel) {
      this.carrousel.nativeElement.removeEventListener("mouseup",null);
      this.carrousel.nativeElement.style.cursor = 'default';
    }
  }

  initCarrouselEvents(){
    if(this.carrousel && this.carrousel.nativeElement) {
      if (window.PointerEvent) {
        this.carrousel.nativeElement.addEventListener('pointerdown', this.gestureStart2.bind(this));
        this.carrousel.nativeElement.addEventListener('pointermove', this.gestureMove2.bind(this));
        this.carrousel.nativeElement.addEventListener('pointerup', this.gestureEnd.bind(this));
      } else {
        this.carrousel.nativeElement.addEventListener('touchdown', this.gestureStart2.bind(this));
        this.carrousel.nativeElement.addEventListener('touchmove', this.gestureMove2.bind(this));
        this.carrousel.nativeElement.addEventListener('touchup', this.gestureEnd.bind(this));
        this.carrousel.nativeElement.addEventListener('mousedown', this.gestureStart2.bind(this));
        this.carrousel.nativeElement.addEventListener('mousemove', this.gestureMove2.bind(this));
        this.carrousel.nativeElement.addEventListener('mouseup', this.gestureEnd.bind(this));
      }
      this.carrousel.nativeElement.addEventListener('mouseup', (e) => {
        if(!this.initCarrousel) return;
        this.carrousel.nativeElement.style.cursor = 'grab';
      });
    }

  }

  gestureStart2(e: any) {
    if(!this.initCarrousel) return;
    this.pressed = true;
    this.initialPosition = e.pageX;
    const transformMatrix = window.getComputedStyle(this.innerCarrousel.nativeElement).getPropertyValue('transform');
    if (transformMatrix !== 'none') {
      this.transform = parseInt(transformMatrix.split(',')[4].trim());
    }
  }


  gestureMove2(e: any){
    if(!this.initCarrousel) return;
    if(!this.pressed) return;
    e.preventDefault();
    const currentPosition = e.pageX;
    const diff = currentPosition - this.initialPosition;
    this.innerCarrousel.nativeElement.style.transform = `translateX(${this.transform + diff}px)`;
    this.checkboundary2()
  }

  gestureStart(e: any) {
    if(!this.initCarrousel) return;
    this.pressed = true;
    this.startx = e.offsetX - this.innerCarrousel.nativeElement.offsetLeft;
    // this.carrousel.nativeElement.style.cursor = 'grabbing';
  }

  gestureMove(e: any){
    if(!this.initCarrousel) return;
    if(!this.pressed) return;
    e.preventDefault();
    const x = e.offsetX;
    this.innerCarrousel.nativeElement.style.left = `${x - this.startx}px`;
    this.checkboundary()
  }

  gestureEnd(e) {
    if(!this.initCarrousel) return;
    this.pressed = false;
  }

  checkboundary(){
    let outer = this.carrousel.nativeElement.getBoundingClientRect();
    let inner = this.innerCarrousel.nativeElement.getBoundingClientRect();
    if(parseInt(this.innerCarrousel.nativeElement.style.left) > 0) {
      this.innerCarrousel.nativeElement.style.left = '0px';
    } else if(inner.right < outer.right) {
      this.innerCarrousel.nativeElement.style.left = `-${inner.width - outer.width}px`;
    }
  }

  moveCarrousel2(valueToMove: number) {
    const leftV = this.getMatrix(this.innerCarrousel.nativeElement).x;
    const calc = leftV - valueToMove;
    this.innerCarrousel.nativeElement.style.transform = `translateX(${calc}px)`;
    this.checkboundary2();
  }

  moveCarrousel(valueToMove: number) {
    const leftV = isNaN(parseInt(this.innerCarrousel.nativeElement.style.left)) ? 0 : parseInt(this.innerCarrousel.nativeElement.style.left);
    const calc = leftV - valueToMove;
    this.innerCarrousel.nativeElement.style.left =`${calc}px`;
    this.checkboundary();
  }

  onLeftMove() {
    clearInterval(this.buttonLongInterval);
    this.moveCarrousel2(-10);
    this.buttonLongInterval = setInterval(() => {
      this.moveCarrousel2(-10);
    }, this.timeToMove);
  }


  onRightMove() {
    clearInterval(this.buttonLongInterval);
    this.moveCarrousel2(10);
    this.buttonLongInterval = setInterval(() => {
      this.moveCarrousel2(10);

    }, this.timeToMove);
  }


  onFinishMove() {
    clearInterval(this.buttonLongInterval);
  }

  getMatrix(element) {
    const values = element.style.transform.split(/\w+\(|\);?/);
    const transform = values[1].split(/,\s?/g).map(parseInt);
    return {
      x: isNaN(transform[0]) ? 0 : transform[0],
      y: isNaN(transform[1]) ? 0 : transform[1],
      z: isNaN(transform[2]) ? 0 : transform[2]
    };
  }

  checkboundary2(){
    const transformMatrix = this.getMatrix(this.innerCarrousel.nativeElement);
    let outer = this.carrousel.nativeElement.getBoundingClientRect();
    let inner = this.innerCarrousel.nativeElement.getBoundingClientRect();
    if(parseInt(transformMatrix.x) > 0) {
      this.innerCarrousel.nativeElement.style.transform = `translateX(0px)`;
    }
    else if(inner.right < outer.right) {
      this.innerCarrousel.nativeElement.style.transform = `translateX(-${inner.width - outer.width}px)`;
    }
  }


  openStatusServiceModal() {
    const config = {
      data: this.jumbotronData,
      modalClass: 'ds-modal-sm',
      position: 'center',

    };
    this.cdkModalService.open(ServiceStatusModalComponent, config);
  }


  private loadJumbotronData(){
    this.sidebarServices
      .getJumbotromInformation()
      .pipe(
        tap((res: any) => {
          this.showJumbotrom = res && res.services && res.services.length > 0;
          this.jumbotronData = res;
          localStorage.setItem("jumbotronData", JSON.stringify(this.jumbotronData));
          this.jumbotronData.levelProtectionConfig = this.getLevelProtectionCongig(this.jumbotronData.levelProtection);
        }),
        tap((res: any) => this.processJumbotromItems(res.services)),
        tap(() => this.isloading = false),
        tap(() => {
          setTimeout(() =>{
            if(this.showJumbotrom) {
              this.availableSpaceCalculate();
              this.initCarrouselEvents();
              this.finalized.emit(true);
            }
          } ,100)

        }),
      )
      .subscribe()
  }


  getLevelProtectionCongig(levelProtection: ServiceStatusLevel) {
    let protectionConfig: any = {
      translatedText: '',
      levelClassCss: '',
      iconConfig: ''
    }
    switch (levelProtection) {
      case ServiceStatusLevel.LowLevel:
        protectionConfig.translatedText = this.translate.instant('COMP_SERVICE_STATUS.LOW');
        protectionConfig.levelClassCss = 'ds-c-danger';
        protectionConfig.iconConfig = 'icon-warning';
        break;
      case ServiceStatusLevel.MediumLevel:
        protectionConfig.translatedText = this.translate.instant('COMP_SERVICE_STATUS.MEDIUM')
        protectionConfig.levelClassCss = 'ds-c-warning';
        protectionConfig.iconConfig = 'icon-exclamation';
        break;
      case ServiceStatusLevel.HightLevel:
        protectionConfig.translatedText = this.translate.instant("COMP_SERVICE_STATUS.HIGH");
        protectionConfig.levelClassCss = 'ds-c-success';
        protectionConfig.iconConfig = 'icon-green-check';
      break;
      default:
        break;
    }
    return protectionConfig;
  }

  processJumbotromItems(services: any[]) {
    this.jumbotronData.services = services.map( x => {
      x.iconClass = 'icon-tick-round';
      x.colorClass = 'ds-c-success';
      x.borderClass = 'success';
      if(!x.isActive) {
        x.iconClass = 'icon-exclam';
        x.colorClass = 'ds-c-warning';
        x.borderClass = 'orange';
      }
      return  x;
    })
  }

  goToService(service: any) {
    this.router.navigate(['service/' + service.serviceCode]);
  }

  private watchRefreshJumbotrom() {
    this.sidebarServices.reloadJumbotron$
      .pipe(
        filter(data => !!data),
        tap(data => this.reloadJumbotronInsteadServiceUpdate(data))
      )
      .subscribe();
  }

  private reloadJumbotronInsteadServiceUpdate(serviceData: any) {
    if(this.jumbotronData && this.jumbotronData.services && this.jumbotronData.services.length) {
      const index = this.jumbotronData.services.findIndex(x => x.serviceCode == serviceData.serviceCode);
      if(index >= 0) {
        let iconClass = 'icon-tick-round';
        let colorClass = 'ds-c-success';
        let borderClass = 'success';
        if(!serviceData.isActive) {
          iconClass = 'icon-exclam';
          colorClass = 'ds-c-warning';
          borderClass = 'orange';
        }
        this.jumbotronData.services[index].borderClass = borderClass;
        this.jumbotronData.services[index].colorClass = colorClass;
        this.jumbotronData.services[index].iconClass = iconClass;
        this.jumbotronData.services[index].isActive = serviceData.isActive;
      }
    }
  }

}

