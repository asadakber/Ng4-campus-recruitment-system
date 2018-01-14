import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { JobService } from '../job.service';
// import {MdDialog} from '@angular/material';
import {AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class ViewpostComponent implements OnInit {
  show = false;
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
    //  this.studentView();

   
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
        this.applydata.push(element.val());
        // console.log(element.val())
      });
    })
    console.log("clicked")
  }

 
stdapply() {
 this.viewprofile = this.db.list('/APPLY/',{preserveSnapshot:true})
  this.viewprofile.subscribe(user => {
    console.log(this.applydata);
    this.applydata.length = 0;
    user.forEach(element => {
      this.applydata.push(element.val());
      console.log(this.applydata);
    });
  })
  console.log("clicked")
}
  



  // Show() {
  //   this.show = !this.show
  // }

  // openDialog(){
  //   this.dialog.open(MdDialog)
  // }
 
  ngOnInit() {
  }

}
