import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { JobService } from '../job.service';
import {AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class ViewjobComponent implements OnInit {
  name: any;
  uid;
  viewprofile: FirebaseListObservable<any>;
  tableview = [];
  userview;
  constructor(private db:AngularFireDatabase,private jobservice: JobService ,public afauth: AngularFireAuth) {
    this.afauth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
     this.jobView();
     this.studentView();
    //  this.applyview();
   }

   jobView(){
    this.viewprofile = this.db.list('/JOB/', {preserveSnapshot:true})
    this.viewprofile.subscribe(user => {
      user.forEach(element => {
        this.tableview.push(element.val());
      });
    })
    console.log("clicked")
  }
  applydata = [];
  studentView(){
    this.uid = this.afauth.auth.currentUser.uid;
    this.viewprofile = this.db.list('/STD/' + this.uid, {preserveSnapshot:true})
    this.viewprofile.subscribe(user => {
      user.forEach(element => {
        // this.applydata.push(element.val());
      });
    })
    console.log("clicked")
  }

std: FirebaseObjectObservable<any>;
applyview() {
  this.uid = this.afauth.auth.currentUser.uid;
  this.std = this.db.object('/STD/' + this.uid, {preserveSnapshot: true})
  this.std.subscribe(user => {
    console.log(user.key);
    console.log(user.val());
    this.applydata.push(user.val());
    this.jobservice.applyprofile(user.val());
  })
  console.log("clicked");
  console.log(this.applydata)
}

// apply() {
//   this.jobservice.applyprofile(this.applydata);
// }
  

  ngOnInit() {
  }

}
