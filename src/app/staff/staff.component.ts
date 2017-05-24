import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private staffS: StaffService) { }

  ngOnInit() {
    this.staffS.getStaff();
  }

  setStaff() {
    this.staffS.setStaff();
  }
}
