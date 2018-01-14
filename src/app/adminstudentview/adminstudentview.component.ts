import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { AdminService } from '../admin.service';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminstudentview',
  templateUrl: './adminstudentview.component.html',
  styleUrls: ['./adminstudentview.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class AdminstudentviewComponent implements OnInit {
  name: any;
  uid;
  viewprofile: FirebaseListObservable<any>;
  tableview = [];
  valueKey = [];
  userview;
  constructor(private db:AngularFireDatabase,private adminservice: AdminService ,public afauth: AngularFireAuth, private router: Router) {
    
    this.afauth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

    this.studentView();
   }

   studentView(){
    this.viewprofile = this.db.list('/STD/', {preserveSnapshot:true})
    this.viewprofile.subscribe(user => {
      this.tableview.length = 0;
      user.forEach(element => {
        this.tableview.push(element.val());
        this.valueKey.push(element.key);
        // console.log( this.tableview)
      });
    })
    console.log("clicked")
  }
  
  delete = function(i) {
   const  key = this.valueKey[i]
   this.db.list('/STD/' + key, {preserveSnapshot:true}).remove()
  }


  logOut() {
    this.afauth.auth.signOut();
    this.router.navigateByUrl('/admin-dashboard');
  }

  ngOnInit() {
  
  }

}
