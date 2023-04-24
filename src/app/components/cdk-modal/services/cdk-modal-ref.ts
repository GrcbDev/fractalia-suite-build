import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { ModalConfig } from './cdk-modal.service';

export class CDKModalRef<R = any, T = any> {
  afterClosed$ = new Subject<R>();

  constructor(private overlayRef: OverlayRef, public component: ComponentType<any>, public config?: ModalConfig<T>) {}

  public close(config?: R) {
    const modalOpens = document.querySelectorAll('.cdk-global-overlay-wrapper');
    if(modalOpens.length <= 1) {
      const body = document.getElementById("main-body");
      body.classList.remove('cdk-modal-open');
    }
    this.overlayRef.dispose();
    this.afterClosed$.next(config!);
    this.afterClosed$.complete();
  }
}
