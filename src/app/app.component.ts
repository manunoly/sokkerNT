import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome NTDB!';
  user: any;
  name = '';
  showName: Subscription;

  constructor(private auth: AuthService) {
    this.user = this.auth.getUser();
    this.user.subscribe(
      (data: Object) => {
        if (data != null)
          this.name = data['displayName'];
      },
      (error: JSON) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }
  ngOnInit() {

  }
  loginGoogle() {
    this.auth.loginGoogle();

  }
  logout() {
    this.auth.logout()
  }
}
