import { Component, Input } from '@angular/core';
import { DigitalContact } from 'src/app/models/digitalContact';
import { PartnerService } from 'src/app/services/partner.service';
import { FormService } from 'src/app/services/form.service';
import { UserService } from 'src/app/services/user.service';
import { ServicesService } from 'src/app/services/services.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TruncateService } from 'src/app/services/truncate.service';
import { LocalService } from 'src/app/services/local.service';
import { environment } from 'src/environments/environment';
import { Service } from 'src/app/models/service';
import { SidebarService } from 'src/app/modules/shared/sidebar-menu.service';
import { ServiceCategoryCodes } from 'src/app/modules/service/service-one-page/shared/serviceCategoryCodes';
import { StringUtils } from 'src/app/utils/string-utils';

@Component({
  selector: 'app-digital-contact',
  templateUrl: './digitalcontact.component.html',
  styleUrls: ['./digitalcontact.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class DigitalContactComponent {
  @Input() service: any;
  public data: DigitalContact = new  DigitalContact;
  public staticContentUrl = environment.STATIC_CONTENT;
  postError = false;
  submitted = false;
  loading = false;
  success = false;
  fileName: string[] = [];
  lastFileName: string;
  category: string;
  public showMessage: boolean = false;
  public message: string = "";
  public services: Service[] = [];
  copyData: any;


  constructor(public partnerService: PartnerService,
    public formService: FormService,
    public servicesService: ServicesService,
    public userService: UserService,
    public truncateService: TruncateService,
    public activeModal: NgbActiveModal,
    public sidebarService: SidebarService,
    private localService: LocalService) {
      this.data.Name = userService.currentUserValue.name;
      this.data.Email = userService.currentUserValue.email;
      this.data.Phone = userService.currentUserValue.phone;
      this.data.AttachedFiles = [];
      this.copyData = StringUtils.deepClone(this.data);
      this.processServices();
    }

  change = () =>{
    this.loading = !this.loading;
  }

  onSubmit(){
    this.loading = true;
    this.servicesService.postContactForm(this.data).then(result => {
      this.loading = false
      if(result == true){
       this.success = true;
      }
    })
  }

  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onChangeFile($event: any) {
    const target = $event.target;
    if (target.files != null) {
      if (target.files.length > 0) {
        const file = target.files[0];
        const value = target.value.toLowerCase();
        const ext = value.split('.').pop();

        let exts = ["png", "jpg", "jpeg","pdf"];
        if (exts.indexOf(ext) != -1) {
          this.getBase64(file).then(result => {
            this.data.AttachedFiles.push(result.toString())
            this.fileName.push(target.files[0].name)
            this.lastFileName = target.files[0].name
          });
        }
      }
    }
  }

  getLocalStorage(key) {
    return this.localService.getJsonValue(key);
  }

  processServices() {
    const kitServices = this.sidebarService.userMenuOptions.find(x => x.code === ServiceCategoryCodes.KIT);
    this.services = kitServices.services.filter(x => (x.code != 'FSK') && (x.code != 'ELE'));
  }

}
