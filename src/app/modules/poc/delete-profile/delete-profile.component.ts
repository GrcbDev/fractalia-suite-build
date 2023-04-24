import { Component, OnInit } from '@angular/core';
import { CDKModalRef } from 'src/app/components/cdk-modal/services/cdk-modal-ref';
import { UserService } from 'src/app/services/user.service';
import { FamilyUnitService } from '../shared/family-unit.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {
  loading = false;
  profile: any;
  constructor(
    private modalRef: CDKModalRef,
    private userService: UserService,
    private familyUnitService: FamilyUnitService,
  ) { }

  ngOnInit() {
    this.profile = this.modalRef.config.data;
  }

  closeModal() {
    this.modalRef.close();
  }

  saveDelete(){
    this.loading = true;
    this.userService.deleteUserProfile(this.profile)
    .then(
      () => {
        this.familyUnitService.emitNotification(true);
        this.loading = false;
        this.closeModal();
      },
      (error) => {
        console.log("error: ", error);
      })
  }

}
