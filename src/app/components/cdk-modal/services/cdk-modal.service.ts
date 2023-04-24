import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { CDKModalComponent } from '../cdk-modal.component';
import { CDKModalRef } from './cdk-modal-ref';
import { MODAL_DATA } from './cdk-modal-tokens';


export interface ModalConfig<T> {
  data?: T;
  position?: string;
  minWidth?: string;
  modalClass?: string | string[];
}

@Injectable({ providedIn: 'root' })
export class CDKModalService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<R = any, T = any>(component: ComponentType<any>, config?: ModalConfig<T>): CDKModalRef {
    let positionStrategy = this.overlay
      .position()
      .global()

    switch (config?.position) {
      case 'horizontal-center':
        positionStrategy
        .centerHorizontally();
        break;

      default:
        positionStrategy
        .centerHorizontally()
        .centerVertically();
        break;
    }
    let finalClass: string[] = [];
    if(config.modalClass && typeof(config.modalClass) === 'string')  {
      finalClass = [config.modalClass];
    } else if(config.modalClass && Array.isArray(config.modalClass)) {
      finalClass =config.modalClass;
    }

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      panelClass: ['ds-modal-container'].concat(finalClass),
      minWidth: config?.minWidth,
    });

    const body = document.getElementById("main-body");
    body.classList.add('cdk-modal-open');

    const modalRef = new CDKModalRef<R, T>(overlayRef, component, config);

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: CDKModalRef, useValue: modalRef },
        { provide: MODAL_DATA, useValue: config?.data },
      ],
    });

    const portal = new ComponentPortal(CDKModalComponent, null, injector);
    overlayRef.attach(portal);

    return modalRef;
  }
}
