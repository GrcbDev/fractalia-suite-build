import { Component, ViewEncapsulation, AfterViewInit, Input } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { FormService } from 'src/app/services/form.service';
import { DigitalLife } from 'src/app/models/digitalLife';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TruncateService } from 'src/app/services/truncate.service';
import { UserValidator } from 'src/app/validators/user.validator';
import { LocalService } from 'src/app/services/local.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-digital-life',
  templateUrl: './digital-life.component.html',
  styleUrls: ['./digital-life.component.scss'],
})
export class DigitalLifeComponent implements AfterViewInit {
  @Input() service: any;
  public data: DigitalLife = new DigitalLife;
  postError = false;
  submitted = false;
  loading = false;
  dniName: string;
  optName: string;
  public showMessage: boolean = false;
  public message: string = "";
  extensionFileAccepted: any = [];
  maxLengthFileUpload: number = 50;
  fileAcceptDni: string[] = [];
  fileAcceptOptional: string[] = [];

  constructor(public partnerService: PartnerService,
    public userService: UserService,
    public formService: FormService,
    private messageService: MessageService,
    private router: Router,
    public truncateService: TruncateService,
    private http: HttpClient,
    private translate: TranslateService,
    public activeModal: NgbActiveModal,
    private localService: LocalService) {
    translate.get('SELECCIONE_ARCHIVO').subscribe(res => { this.dniName = res; this.optName = res });
  }

  ngAfterViewInit(): void {
    var file1 = document.getElementById('dniLabel')
    var file2 = document.getElementById('optLabel')
    var txtBtn = this.translate.instant("BROWSE");
    file1.setAttribute('data-value', txtBtn);
    file2.setAttribute('data-value', txtBtn);
    this.getAcceptedFilesExtension();
  }
  change = () => {
    this.loading = !this.loading;
  }
  onSubmit() {
    this.showMessage = false
    if (this.data.phone != null && this.data.phone.length > 0) {
      if (UserValidator.validPhone(this.data.phone) == null) {
        this.message = this.translate.instant('MULTIUSER.VALIDATION11'); this.showMessage = true; this.loading = false; return;
      }
    }
    if (UserValidator.validEmail(this.data.email) == null) {
      this.message = this.translate.instant('MULTIUSER.VALIDATION4'); this.showMessage = true; this.loading = false; return;
    }

    this.postError = false;
    this.submitted = true;
    this.change();
    this.translate.get('FORM_ENVIANDO').subscribe(res => this.messageService.add(res, "ok"));
    this.formService.postDigitalLife(this.data).then((result: any) => {

      debugger
      this.change();

      if (result.comments) {
        switch (result.comments) {
          case 'E001;E002':
          case 'E001':
          case 'E002':
            const m1 = this.translate.instant('MESSAGE_EXTENSIONS_NO_VALID').replace('{LIST_ACCEPTED}', this.extensionFileAccepted.join(','));
            this.messageService.add(m1, "error");
            return;
          case 'E003;E004':
          case 'E003':
          case 'E004':
            const m2 = this.translate.instant('MAX_LENGTH_FILE_UPLOAD').replace('{MAX_LENGTH_FILE}', this.maxLengthFileUpload);
            this.messageService.add(m2, "error");
            return;
        }
      }

      //this.change();
      this.translate.get('FORM_ENVIADO').subscribe(res => this.messageService.add(res, "ok"));
      this.activeModal.dismiss('Cross click');
    }, error => {
      this.translate.get('ERROR_ENVIO_FORM').subscribe(res => {
        this.messageService.add(res, "error"); this.postError = true;
        this.change();
      });
    });
  }

  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let dniFile = document.getElementById("dniFile") as HTMLInputElement;
    let fileToUpload = <File>files[0];

    const validLengthFile = this.validateLengthFileUpload(fileToUpload, this.maxLengthFileUpload);
    if (validLengthFile === 'ok') {
      const validExtension = this.validateExtensionInput(dniFile, this.extensionFileAccepted);
      /// Validar extension de archivo.
      if (validExtension === 'ok')
        this.getBase64(fileToUpload).then(result => { console.log(result.toString()); this.data.dniImage = result.toString(); this.data.dniImageName = this.dniName = fileToUpload.name });
      else
        alert(this.translate.instant('MESSAGE_EXTENSIONS_NO_VALID').replace('{LIST_ACCEPTED}', this.extensionFileAccepted.join(',')));
    }
    else {
      alert(this.translate.instant('MAX_LENGTH_FILE_UPLOAD').replace('{MAX_LENGTH_FILE}', this.maxLengthFileUpload));
    }
  }

  public uploadOptional = (files) => {
    if (files.length === 0) {
      return;
    }

    let aditional = document.getElementById("aditional") as HTMLInputElement;
    let fileToUpload = <File>files[0];

    const validLengthFile = this.validateLengthFileUpload(fileToUpload, this.maxLengthFileUpload);
    if (validLengthFile === 'ok') {
      const validExtension = this.validateExtensionInput(aditional, this.extensionFileAccepted);
      /// Validar extension de archivo.
      if (validExtension === 'ok')
        this.getBase64(fileToUpload).then(result => { this.data.optImage = result.toString(); this.data.optImageName = this.optName = fileToUpload.name });
      else
        alert(this.translate.instant('MESSAGE_EXTENSIONS_NO_VALID').replace('{LIST_ACCEPTED}', this.extensionFileAccepted.join(',')));
    } else {
      alert(this.translate.instant('MAX_LENGTH_FILE_UPLOAD').replace('{MAX_LENGTH_FILE}', this.maxLengthFileUpload));
    }
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

  /**********************************************************************/
  /* Obtener listado de extensiones de archivos y maximo tamño archivos */
  /**********************************************************************/
  getAcceptedFilesExtension() {
    try {
      this.http.get(environment.STATIC_CONTENT + 'json/extension-file-accepted.json').subscribe((data: any) => {
        this.extensionFileAccepted = data.default;
        this.maxLengthFileUpload = data.default_Max_Uploaded_Files_Mb ? data.default_Max_Uploaded_Files_Mb : this.maxLengthFileUpload;
        this.fileAcceptOptional = this.fileAcceptDni = this.extensionFileAccepted;
      });
    } catch (error) {
      console.log(error);
    }
  }

  validateExtensionInput(oInput: any, _validFileExtensions: string[]): string {
    let message = '';
    if (oInput.type == "file") {
      let sFileName = oInput.value;
      if (sFileName.length > 0) {
        let blnValid = false;
        if (_validFileExtensions && _validFileExtensions.length > 0) {
          for (let j = 0; j < _validFileExtensions.length; j++) {
            let sCurExtension = _validFileExtensions[j];
            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
              blnValid = true;
              break;
            }
          }
        }
        if (!blnValid) {
          message = "error";
          oInput.value = "";
        } else {
          message = "ok";
        }
      }
    }
    return message;
  }

  validateLengthFileUpload(file: any, maxLegth: number): string {
    let message = "";
    /// Mb.
    const valLen = file && file.size ? (file.size / 1024 / 1024) : 0;
    if (valLen > maxLegth) {
      message = "error";
    } else {
      message = "ok";
    }

    return message;
  }
}
