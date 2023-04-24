import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/user';
import { MessageService } from 'src/app/services/message.service';
import { PartnerService } from 'src/app/services/partner.service';
import { ImageUtils } from 'src/app/utils/ImageUtils';
import { ValidatorsExtends } from 'src/app/utils/validators-extends';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {
  @Input() userData: User;
  @Input() loadingProfileData = false;
  profileDataForm: FormGroup;
  public staticContentUrl = environment.STATIC_CONTENT;
  public image: string = `${this.staticContentUrl}img/add-foto.png` ;

  isReadOnlyEmail = false;
  public loginType: number;
  @Output() onSubmitProfileDataForm = new EventEmitter();
  constructor(
    public sanitizer: DomSanitizer,
    private translate: TranslateService,
    private messageService: MessageService,
    public partnerService: PartnerService,
  ) { }

  ngOnInit() {
    this.createForm();
    this.updateProfileFormValues();
    this.loginType = this.partnerService.partner.loginType;
    this.readOnlyEmail();
  }

  onUploadImagen($event: any) {
    const target = $event.target;
    if (target.files != null) {
      if (target.files.length > 0) {
        const file = target.files[0];
        const value = target.value.toLowerCase();
        const ext = value.split('.').pop();
        const name = target.name.toLowerCase();
        let exts = ["png", "jpg", "jpeg", "gif"];
        if (name == "favicon") {
          exts = ["png", "jpg", "jpeg", "gif", "ico"];
        }
        if (exts.indexOf(ext) != -1) {
          ImageUtils.getBase64(file).then(result => {
            ImageUtils.compressImage(result, 100, 100).then(compressed => {
              this.image = compressed;
              // this.user.profileImage = this.image
            })
          });
        }
        else {
          // console.clear();
          this.translate.get('ONLY_IMAGES_ERROR').subscribe(res => this.messageService.add(res, "error"));
        }
      }
    }
  }

  readOnlyEmail() {
    this.isReadOnlyEmail = this.loginType == 1 || this.loginType == 4 || this.loginType == 9 || this.loginType == 6 || this.loginType == 11;
  }

  private updateProfileFormValues(){
    if(this.userData && Object.keys(this.userData).length) {
      const userData = {
        name: this.userData.name,
        email : this.userData.email,
        surname: this.userData.surname,
        languageCode: this.userData.languageCode,
        countryCode: this.userData.countryCode,
        adress: this.userData.adress,
        city: this.userData.city,
        postalcode: this.userData.postalcode,
        phone: this.userData.phone,
        checkTerms: false,
      };
      this.profileDataForm.patchValue(userData);
    }
  }


  private createForm() {
    this.profileDataForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        email : new FormControl('', [Validators.required, ValidatorsExtends.validateEmail()]),
        surname: new FormControl('', [Validators.required]),
        languageCode: new FormControl('', [Validators.required]),
        countryCode: new FormControl('', null),
        adress: new FormControl('', null),
        city: new FormControl('', null),
        postalcode: new FormControl('', null),
        phone: new FormControl('', [ValidatorsExtends.validatePhone()]),
        checkTerms: new FormControl(null, [Validators.requiredTrue]),
        activeNewsletter: new FormControl(true, null),
      },
    )
  }

  onSubmitForm(){
    this.onSubmitProfileDataForm.emit(
      {
        formValues: this.profileDataForm.value,
        imagen: this.image
      }
    );
  }
}
