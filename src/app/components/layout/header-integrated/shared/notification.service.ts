import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { StringUtils } from 'src/app/utils/string-utils';

@Injectable( {
    providedIn:'root'
})
export class NotificationService {
openNotification$: BehaviorSubject<any> = new BehaviorSubject(null);
showBell$: BehaviorSubject<boolean> = new BehaviorSubject(false);
isOpen: boolean = false;
sidebarToogle: boolean = true;
showBell = false;
totalNotReadedNotifications = "";
constructor() {
  this.initSidebarToogle();
}

toogleNotification(){
  this.isOpen = !this.isOpen;
  this.openNotification$.next( { toogle: this.isOpen } );
  const isMobile =  StringUtils.isMobileOrTabletCheck();
  if(isMobile) document.body.style.overflowY = this.isOpen ? 'hidden' : 'auto';

}

closeNotification() {
  if(this.isOpen) {
    this.isOpen =false;
    this.openNotification$.next({ toogle: this.isOpen });
    const isMobile =  StringUtils.isMobileOrTabletCheck();
    if(isMobile) document.body.style.overflowY = this.isOpen ? 'hidden' : 'auto';
  }
}

initSidebarToogle() {
  this.sidebarToogle = window.screen.width > 767;
}

toogleSidebarToogle() {
  this.sidebarToogle = !this.sidebarToogle;
  this.removeModalOpen();
}

removeModalOpen() {
  if(!this.sidebarToogle) {
    const body = document.getElementById('main-body');
    body.classList.remove("modal-open");
  }
}

setSidebarToogle(value: boolean) {
  this.sidebarToogle = value;
  this.removeModalOpen();
}

}
