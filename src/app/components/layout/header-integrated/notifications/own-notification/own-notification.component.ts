import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { StringUtils } from 'src/app/utils/string-utils';


@Component({
  selector: 'app-own-notification',
  templateUrl: './own-notification.component.html',
  styleUrls: ['./own-notification.component.scss']
})
export class OwnNotificationComponent implements OnInit {
  @Input() notifications: any[] = [];
  currentDate
  yesterdayDate
  isloading = false;
  sortNotifications: any[] = [];

  constructor(
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    console.log('init own');
    this.currentDate = this.getCurrentDate();
    this.yesterdayDate = this.getYesterday();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.sortNotifications = changes.notifications.currentValue.sort((a: any, b: any) => {
      const dateA: any = new Date(a.notificationDate.split("/").reverse().join("/"));
      const dateB: any = new Date(b.notificationDate.split("/").reverse().join("/"));
      return dateB - dateA;
    });
  }

  getCurrentDate() {
    const date = new Date();
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    return formattedDate;
  }

  getYesterday() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const formattedDate = this.datePipe.transform(yesterday, 'dd/MM/yyyy');
    return formattedDate;
  }


  // formatNotification() {
  //   for (let index = 0; index < this.notifications.length; index++) {
  //     const element = this.notifications[index];
  //     element.dayFormatted = StringUtils.convertDateLatinFormat(element.notificationDate);
  //   }
  // }
}
