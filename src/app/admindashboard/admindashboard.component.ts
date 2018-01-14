import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class AdmindashboardComponent implements OnInit {
 name: any;
  state: string = '';
  constructor(public afauth: AngularFireAuth, private router: Router) { 
    this.afauth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
    
  }

   logOut() {
    this.afauth.auth.signOut();
    this.router.navigateByUrl('/student');
  }

  ngOnInit() {
  }

}
