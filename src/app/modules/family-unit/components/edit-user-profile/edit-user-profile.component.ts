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
import { User } from "src/app/models/user";
import { ImageUtils } from "src/app/utils/ImageUtils";
import { environment } from "src/environments/environment";
import { TranslateService } from "@ngx-translate/core";
import { MessageService } from "src/app/services/message.service";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "src/app/services/user.service";
import { UserProfileData } from "src/app/models/userProfile";
import { TIMEZONELIST } from "../shared/Timezones";

@Component({
  selector: "app-edit-user-profile",
  templateUrl: "./edit-user-profile.component.html",
  styleUrls: ["./edit-user-profile.component.scss"],
})
export class EditUserProfileComponent implements OnInit {
  public staticContentUrl = environment.STATIC_CONTENT;
  @Output() action = new EventEmitter<any>();
  @Input() profile: UserProfileData;
  basicModalCloseResult: string = "";
  @ViewChild("basicModal") basicModal: ElementRef;
  timeZoneList = TIMEZONELIST;
  count = 0;
  public image: string = `${this.staticContentUrl}img/add-user.png`;
  public user: User;
  constructor(
    public modalService: NgbModal,
    private translate: TranslateService,
    private messageService: MessageService,
    public sanitizer: DomSanitizer,
    public userService: UserService
  ) {}

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
        close()
      })
      .catch((res) => {
        close()
      });
  }

  continue() {
    console.log(this.profile);
    if (this.count === 0) {
      this.count = this.count + 1;
      this.modalService.dismissAll();
      this.userService.editUserProfile(this.profile).then(
        (resp) => {
          console.log(resp);
          this.action.emit({
            isModalOpen: false,
            profile: this.profile,
            isForAdd: false,
          });
        },
        (error) => {
          console.log("error: ", error);
          this.modalService.dismissAll();
        }
      );
    }
  }

  close() {
    this.action.emit({
      isModalOpen: false,
      action: null,
    });
    this.modalService.dismissAll();
  }

  onUploadImagen($event: any) {
    const target = $event.target;
    if (target.files != null) {
      if (target.files.length > 0) {
        const file = target.files[0];
        const value = target.value.toLowerCase();
        const ext = value.split(".").pop();
        const name = target.name.toLowerCase();
        let exts = ["png", "jpg", "jpeg", "gif"];
        if (name == "favicon") {
          exts = ["png", "jpg", "jpeg", "gif", "ico"];
        }
        if (exts.indexOf(ext) != -1) {
          this.getBase64(file).then((result) => {
            ImageUtils.compressImage(result, 100, 100).then((compressed) => {
              this.image = compressed;
              // this.user.profileImage = this.image;
              this.profile.photo = this.image;
            });
          });
        } else {
          console.clear();
          this.translate
            .get("ONLY_IMAGES_ERROR")
            .subscribe((res) => this.messageService.add(res, "error"));
        }
      }
    }
  }

  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  onChangGender(e: any) {
    console.log(e.target.value);
    this.profile.gender = e.target.value;
  }

  onChangTimezone(e: any) {
    this.profile.timezone = e.target.value;
  }
}
