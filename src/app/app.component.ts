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

  constructor(private authS: AuthService) {
    this.user = this.authS.getUser();
  }

  ngOnInit() {
    this.user.subscribe(
      (user: Object) => {
        if (user != null)
          this.name = user['email'].split("@")[0];
        // this.name = user['displayName'];
      },
      (error: JSON) => { console.log(error); },
      () => { console.log('completed'); }
    );

  }

  loginGoogle() {
    this.authS.loginGoogle();

  }
  logout() {
    this.authS.logout()
  }

}
