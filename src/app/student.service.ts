import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Injectable()
export class StudentService {
  error: any;
  viewprofile: FirebaseListObservable<any>;
  users: FirebaseListObservable<any[]>;
  Userprofile: FirebaseListObservable<any[]>;
  uid;
  adminuid;
  studentData = [];
  constructor(private db: AngularFireDatabase ,private afauth: AngularFireAuth, private router: Router) {}

  User() {
   this.uid = this.afauth.auth.currentUser.uid;
   this.Userprofile = this.db.list('/user/' + this.uid, {preserveSnapshot: true})
   this.Userprofile.subscribe(snapshot => {
     snapshot.forEach(snapshot => {
       if(snapshot.val().type == 'student') {
         this.router.navigate(['/student-dashboard']);
       }

       else if (snapshot.val().type == 'company') {
         this.router.navigate(['/company-dashboard'])
       }
       else {
         this.router.navigate(['/signup'])
       }
     })
   })
  }


signup(email: string, password: string, type: string) {
    this.afauth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {

    }) .then(value => {
      this.uid = this.afauth.auth.currentUser.uid;
      let data = {email, password, type,status};
      this.db.list('/user/' + this.uid).push(data);
    })
    .catch (err => {
     this.error = err;
    });
  }

  signin(email: string, password:string) {
    this.afauth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.adminuid = this.afauth.auth.currentUser.uid;
      if(this.adminuid === 'I6LoDd1Y6kUbC6r17rvX67h8GGH3') {
        this.router.navigate(['/admin-dashboard'])
      }
    }) .then(value => {
      this.User();
    })

    .catch (err => {
     this.error = err;
    });
   
}

 profile: FirebaseObjectObservable<any>
 studentprofile(user) {
   this.uid = this.afauth.auth.currentUser.uid
   
   this.profile = this.db.object("/STD/" + this.uid)
   this.profile.update(user);
 }
    
}

