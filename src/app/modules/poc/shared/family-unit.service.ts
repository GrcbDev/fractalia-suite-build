import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable( {
    providedIn: 'root'
})
export class FamilyUnitService {
  familyUnitChange$: BehaviorSubject<number> = new BehaviorSubject(null);
  deleteCard$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  deleteIdentity$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public userSupportNotification: any[];

  constructor() {}

  init() {
    this.familyUnitChange$ = new BehaviorSubject(null);
  }

  emitNotification(value?: any) {
    this.familyUnitChange$.next(value);
  }

  clear() {
    this.familyUnitChange$.unsubscribe();
  }

  emitDeleteCard(value?: any) {
    this.deleteCard$.next(value);
  }

  cleanCardListener() {
    this.deleteCard$.unsubscribe();
  }

  emitDeleteIdentity(value?: any) {
    this.deleteIdentity$.next(value);
  }

  cleanIdentityListener() {
    this.deleteIdentity$.unsubscribe();
  }
}
