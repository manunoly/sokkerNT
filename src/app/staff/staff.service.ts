import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class StaffService {
  private country = 'cuba';
  private staff: any;

  constructor(private db: AngularFireDatabase, private authS: AuthService) { }

  getStaff() {
    this.staff = this.db.object('/' + this.country + '/staff');
    // console.log(this.staff);
    return this.staff;
  }

  setStaff(NT, staff = '') {
    this.db.object('/' + this.country + '/staff').set({
      NT: NT,
      members: staff.split(',')
    });
  }
}
