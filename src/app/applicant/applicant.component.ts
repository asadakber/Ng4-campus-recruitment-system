import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class ApplicantComponent implements OnInit {
  show = false;
  name: any;
  uid;
  viewprofile: FirebaseListObservable<any>;
  applydata = [];
  userview;
  valueKey = [];
  constructor(private db:AngularFireDatabase,public afauth: AngularFireAuth, private router: Router) {
    this.studentView()
   }

  ngOnInit() {
  }

  

 
   studentView(){
    this.viewprofile = this.db.list('/APPLY/', {preserveSnapshot:true})
    this.viewprofile.subscribe(user => {
      this.applydata.length = 0;
      user.forEach(element => {
        this.applydata.push(element.val());
        this.valueKey.push(element.key);
        // console.log( this.tableview)
      });
    })
    console.log("clicked")
  }
  
  delete = function(i) {
   const  key = this.valueKey[i]
   this.db.list('/APPLY/' + key, {preserveSnapshot:true}).remove()
  }
   

}
