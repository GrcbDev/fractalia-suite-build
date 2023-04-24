import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { PartnerService } from 'src/app/services/partner.service';
import { ValidatorsExtends } from 'src/app/utils/validators-extends';

@Component({
  selector: 'app-access-password',
  templateUrl: './access-password.component.html',
  styleUrls: ['./access-password.component.scss']
})
export class AccessPasswordComponent implements OnInit {
  @Input() itIsOneStepActivation = false;
  @Input() loadingPassword = false;
  @Input()  langUser;
  accessForm: FormGroup;

  passwordInputType: string = 'password';
  confirmPasswordInputType: string =  'password';
  public barLabel: string = "";
  successpass = false;

  @Output() onSubmitAccessForm = new EventEmitter();
  constructor(
    private translate: TranslateService,
    public languageService: LanguageService,
    public partnerService: PartnerService
  ) { }

  ngOnInit() {
    this.createForm();
    this.addCheckValidationIfOneStep();
    this.barLabel = this.translate.instant("CONTRASENA_MESSAGE");
  }

  onSubmitForm(){
    this.onSubmitAccessForm.emit(this.accessForm.value);
  }

  tooglePassword() {
    this.passwordInputType = this.passwordInputType == 'password' ? 'text' : 'password';
  }

  toogleConfirmPassword(){
    this.confirmPasswordInputType = this.confirmPasswordInputType == 'password' ? 'text' : 'password';
  }

  checkpass(success: boolean) {
    this.successpass = success;
  }

  private addCheckValidationIfOneStep() {
    if(this.itIsOneStepActivation) {
      this.accessForm.get('checkTerms').setValidators([Validators.requiredTrue]);
      this.accessForm.get('checkTerms').updateValueAndValidity();
    }
  }

  private createForm() {
    if(this.partnerService.partner.loginType === 11)
    {
      this.accessForm = new FormGroup(
        {
          checkTerms: new FormControl(null, null),
        }
      )
    }
    else
    {
      this.accessForm = new FormGroup(
        {
          password: new FormControl('', [Validators.required]),
          confirmPassword : new FormControl('', [Validators.required]),
          checkTerms: new FormControl(null, null),
        },
        { validators: ValidatorsExtends.matchPassword }
      )
    }
  }

}
