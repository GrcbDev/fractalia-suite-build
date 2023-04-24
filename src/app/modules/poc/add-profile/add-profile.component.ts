import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { ReactiveFormService } from 'src/app/helpers/reactiveform-service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { ImageUtils } from 'src/app/utils/ImageUtils';
import { environment } from 'src/environments/environment';
import { FamilyUnitService } from '../shared/family-unit.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {
  public staticContentUrl = environment.STATIC_CONTENT;
  addUserProfileForm!: FormGroup;
  loading = false;
  public image: string = `${this.staticContentUrl}img/add-user.png`;
  imagenToUpload: any;
  // timeZoneList = TIMEZONELIST;
  addProfileSuccessForm: boolean = false;

  profile: any = {
    name: 'Julio'
  };
  constructor(
    private modalRef: CDKModalRef,
    private userService: UserService,
    public sanitizer: DomSanitizer,
    private translate: TranslateService,
    private messageService: MessageService,
    private formService: ReactiveFormService,
    private familyUnitService: FamilyUnitService,
  )  {}

  ngOnInit() {
    this.createForm();
  }

  closeModal() {
    this.modalRef.close();
  }

  createForm(){
    this.addUserProfileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      gender: new FormControl('', null),
      // timezone: new FormControl('', null),
    })
  }

  get inputName() {
    return this.addUserProfileForm.get("name");
  }

  get isInputNameValid() {
    return this.inputName?.touched && this.inputName.invalid
  }

  get inputSurName() {
    return this.addUserProfileForm.get("surname");
  }

  get isInputSurNameValid() {
    return this.inputSurName?.touched && this.inputSurName.invalid
  }

  get inputEmail() {
    return this.addUserProfileForm.get("email");
  }

  get isInputEmailValid() {
    return this.inputEmail?.touched && this.inputEmail.invalid
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
          ImageUtils.getBase64(file).then((result) => {
            ImageUtils.compressImage(result, 100, 100).then((compressed) => {
              this.image = compressed;
              this.imagenToUpload = compressed;
            });
          });
        } else {
          this.translate
            .get("ONLY_IMAGES_ERROR")
            .subscribe((res) => this.messageService.add(res, "error"));
        }
      }
    }
  }

  saveAddProfileForm() {
    this.formService.markFormGroupTouched(this.addUserProfileForm);
    if(this.addUserProfileForm.valid) {
      this.loading = true;
      const formValues = this.addUserProfileForm.getRawValue();
      this.profile = {
        name: formValues.name,
        surname: formValues.surname,
        email: formValues.email,
        photo: this.imagenToUpload,
        // timezone: formValues.timezone,
        gender: formValues.gender,
      };
      this.userService.addUserProfile(this.profile)
      .then(
        (resp) => {
          this.familyUnitService.emitNotification(true);
          this.loading = false;
          this.addProfileSuccessForm = true;
          // this.closeModal();
        },
        (error) => {
          console.log("error: ", error);
        })
    }

  }
}
