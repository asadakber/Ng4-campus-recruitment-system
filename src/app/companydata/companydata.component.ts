import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-companydata',
  templateUrl: './companydata.component.html',
  styleUrls: ['./companydata.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class CompanydataComponent implements OnInit {
  userView;
  name: any;
  constructor(private db: AngularFireDatabase ,private companyservice: CompanyService ,public afauth: AngularFireAuth,private router: Router) {
    this.afauth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
    this.companyview();
   }

  onsubmit = function(user) {
    this.companyservice.companyprofile(user);
  }


viewprofile: FirebaseListObservable<any>
companyview() {
  this.viewprofile = this.db.list('/COM/', {preserveSnapshot: true})
  this.viewprofile.subscribe(user => {
    user.forEach(element => {
      console.log(element.val());
    });
  })
  console.log("clickked!")
}

  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      address: new FormControl("",Validators.required),
      contact: new FormControl("",Validators.required),
    })
  }

  logOut() {
    this.afauth.auth.signOut();
    this.router.navigateByUrl('/company-dashboard');
  }
  

}
