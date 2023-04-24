export class UserProfileData {
  userProfileId: number;
  userId: number;
  name:string;
  surname:string;
  email: string;
  photo: string;
  timezone:string;
  gender:string;
  creationDate:string | Date;
  creationUser: number;
  modificationDate: string | Date;
  modificationUser: number;
  deletedDate:string;
  deleted: boolean;
}
