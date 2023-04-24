import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeDownUp', [
      state('void', style({
        transform : 'translateY(100%)',
        opacity:0
      })),
      transition('void <=> *', animate(300,style({
        transform:'translateY(0)',
        opacity:1,  
      }))),    
      
    ])
  ]
})
export class MessagesComponent implements OnInit {
  isOpen:boolean = true
  interval;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.messageService.messages.length > 0) {
        this.messageService.messages.forEach(element => {
          element.timeLeft--;
        });
        this.messageService.messages.forEach((element, i) => {
          if (element.timeLeft <= 0) {
            this.messageService.messages.splice(i, 1);
          }
        });
      }
    }, 1000)
  }

  delete(index: number) {
    this.messageService.messages.splice(index, 1);
    this.isOpen = false
  }

}
