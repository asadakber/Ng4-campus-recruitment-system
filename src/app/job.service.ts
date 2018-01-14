import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class JobService {
  error: any;
  uid;
  viewprofile: FirebaseListObservable<any>;
  constructor(private db: AngularFireDatabase ,private afauth: AngularFireAuth, private router: Router) {

  }

  profile: FirebaseObjectObservable<any>
  jobprofile(user) {
    this.uid = this.afauth.auth.currentUser.uid
    this.profile = this.db.object("/JOB/" + this.uid)
    this.profile.update(user);
  }

apply: FirebaseObjectObservable<any>
applyprofile(user) {
  this.uid = this.afauth.auth.currentUser.uid
  this.apply = this.db.object("/APPLY/" + this.uid)
  this.apply.update(user);
}




}
