import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { StudentService } from '../student.service';
import {AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-companyview',
  templateUrl: './companyview.component.html',
  styleUrls: ['./companyview.component.css'],
   animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class CompanyviewComponent implements OnInit {
  name: any;
  uid;
  viewprofile: FirebaseListObservable<any>;
  tableview = [];
  userview;
  constructor(private studentservice: StudentService ,private db:AngularFireDatabase, public afauth: AngularFireAuth) { 
    this.afauth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
    this.companyview();
  }

  companyview(){
    this.viewprofile = this.db.list('/COM/', {preserveSnapshot:true})
    this.viewprofile.subscribe(user => {
      user.forEach(element => {
        this.tableview.push(element.val());
      });
    })
    console.log("clicked")
  }

  ngOnInit() {
  }

}
