import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UserNotificationGrouped } from 'src/app/models/userNotificationGrouped';
import { ImageUtils } from 'src/app/utils/ImageUtils';

@Component({
  selector: 'app-support-notification',
  templateUrl: './support-notification.component.html',
  styleUrls: ['./support-notification.component.scss']
})
export class SupportNotificationComponent implements OnInit {
  @Input() notifications: UserNotificationGrouped[] = [];
  currentDate
  yesterdayDate
  isloading = false;
  sortNotifications: any[] = [];

  constructor(
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    console.log('init supprt');
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

  downloadFile(item, index: number) {
    const urlFile = item.parseURLFiles[index];
    const fileName = item.parseFiles[index];
    ImageUtils.donwloadFileFromURL(urlFile, fileName);
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

}
