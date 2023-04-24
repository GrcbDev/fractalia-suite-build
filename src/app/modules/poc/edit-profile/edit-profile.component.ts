import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public staticContentUrl = environment.STATIC_CONTENT;
  editUserProfileForm!: FormGroup;
  loading = false;
  public image: string = `${this.staticContentUrl}img/add-user.png`;
  imagenToUpload: any;
  // timeZoneList = TIMEZONELIST;
  profile: any;
  editProfileSuccessForm = false;
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
    this.profile = this.modalRef.config.data;
    this.createForm();
    this.setFormValues()
  }

  createForm(){
    this.editUserProfileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      gender: new FormControl('', null),
      // timezone: new FormControl('', null),
    })
  }


  closeModal() {
    this.modalRef.close();
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

  saveEditProfileForm() {
    this.formService.markFormGroupTouched(this.editUserProfileForm);
    if(this.editUserProfileForm.valid) {
      this.loading = true;
      const formValues = this.editUserProfileForm.getRawValue();
      const profile = {...this.profile };
      profile.name =  formValues.name;
      profile.surname = formValues.surname;
      profile.email = formValues.email;
      // profile.timezone = formValues.timezone;
      profile.gender = formValues.gender;

      if(this.image !== this.profile.photo) {
        profile.photo = this.imagenToUpload;
      }

      this.userService.editUserProfile(profile)
      .then(
        (resp) => {
          this.loading = false;
          this.editProfileSuccessForm = true;
          this.familyUnitService.emitNotification(true);
        },
        (error) => {
          console.log("error: ", error);
        })
    }

  }

  setFormValues(){
    const pathFormvalues = {
      name: this.profile.name,
      surname: this.profile.surname,
      email: this.profile.email,
      gender: this.profile.gender,
      // timezone: this.profile.timezone,
    }
    if(this.profile.photo) {
      this.image = this.profile.photo;
    }
    this.editUserProfileForm.patchValue(pathFormvalues);
  }

}
