import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  rechargeSidebar = new EventEmitter();

  constructor() { }
}
