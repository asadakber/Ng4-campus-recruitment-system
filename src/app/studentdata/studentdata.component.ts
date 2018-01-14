import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class StudentdataComponent implements OnInit {
 name: any;
  userView;
  constructor(private db: AngularFireDatabase ,private studentservice: StudentService ,public afauth: AngularFireAuth,private router: Router) {
      this.afauth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
      this.studentView();
   }
  
  onsubmit = function(user) {
    this.studentservice.studentprofile(user);
  }
  
  Viewprofile:FirebaseListObservable<any>
  studentView() {
    this.Viewprofile = this.db.list('/STD/', {preserveSnapshot:true})
    this.Viewprofile.subscribe(user => {
      user.forEach(element => {
        console.log(element.val());
      });
    })
    console.log("clicked!");
  }

  logOut() {
    this.afauth.auth.signOut();
    this.router.navigateByUrl('/student-dashboard');
  }


  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      program: new FormControl("", Validators.required),
      semester: new FormControl("", Validators.required),
      gpa: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
    })
  }


}
