import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-delte-user-profile",
  templateUrl: "./delte-user-profile.component.html",
  styleUrls: ["./delte-user-profile.component.scss"],
})
export class DelteUserProfileComponent implements OnInit {
  @Input() profile: any = null;
  @Output() action = new EventEmitter<any>();
  basicModalCloseResult: string = "";
  @ViewChild("basicModal") basicModal: ElementRef;
  count = 0;
  constructor(public modalService: NgbModal, public userService: UserService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.openBasicModal(this.basicModal);
  }

  openBasicModal(content: any) {
    console.log(TemplateRef);
    this.modalService
      .open(content, { centered: true })
      .result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result;
        close();
      })
      .catch((res) => {
        close();
      });
  }

  continue() {
    this.profile.deleted = true;

    if (this.count === 0) {
      this.count = this.count + 1;
      this.action.emit(
        {
          isModalOpen: false,
          action: true,
          isFordelete: true,
          profile: this.profile
        }
      )
      this.close();
/*
      this.userService.deleteUserProfile(this.profile).then(
        (resp) => {
          console.log(resp);
          this.close();
          const newList = this.userService.userProfileList;

          this.userService.userProfileList = newList.filter(
            (element) => element.userProfileId !== this.profile.userProfileId
          );

          this.action.emit({
            isModalOpen: false,
            action: true,
            isFordelete: true
          });
        },
        (error) => {
          console.warn(error);
          this.close();
        }
      );
      */
    }
  }

  close() {
    this.action.emit({
      isModalOpen: false,
      action: null,
    });
    this.modalService.dismissAll();
  }
}
