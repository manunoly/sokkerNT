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
    this.staff.subscribe(
      staff => {
        console.log(JSON.stringify(staff));
      })
  }

  setStaff() {
    this.db.object('/' + this.country + '/staff').update({ NT: 'manunoly@gmail.com' });
    this.db.object('/' + this.country + '/staff/members').set(['workprofessional1980@gmail.com', 'staff@gmail.com', 'staff1@gmail.com',]);
  }
}
