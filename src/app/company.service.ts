import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Injectable()
export class CompanyService {

error: any;
uid;
viewprofile: FirebaseListObservable<any>;
user: Observable<firebase.User>;
  constructor(private db: AngularFireDatabase,private afauth: AngularFireAuth, private router: Router) {}

profile: FirebaseObjectObservable<any>

companyprofile(user) {
   this.uid = this.afauth.auth.currentUser.uid;
   this.profile = this.db.object('/COM/' + this.uid)
   this.profile.update(user)
}
}
