import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {
nextStep$: BehaviorSubject<boolean> = new BehaviorSubject(false);
constructor() { }

nextStep(value: any){
  this.nextStep$.next(value);
}

}
