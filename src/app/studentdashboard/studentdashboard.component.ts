import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css'],
    animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class StudentdashboardComponent implements OnInit {
name: any;

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
