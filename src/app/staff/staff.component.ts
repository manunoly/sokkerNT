import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';
import {} from 'rxjs/Observable';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  private staff: string;
  private NT: string;

  constructor(private staffS: StaffService) { }

  ngOnInit() {
    this.staffS.getStaff().subscribe(
      (staff: Object ) => {
        this.NT = staff['NT'];
        this.staff = staff['members'].toString();
      });
  }

  saveStaff() {
    this.staff = this.staff.replace(/\s/g, '');
    this.staffS.setStaff(this.NT, this.staff);
  }
}
