import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from 'firebase/app';
import { AdminService } from '../admin.service';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-admincompanyview',
  templateUrl: './admincompanyview.component.html',
  styleUrls: ['./admincompanyview.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class AdmincompanyviewComponent implements OnInit {
  name: any;
  uid;
  viewprofile: FirebaseListObservable<any>;
  tableview = [];
  tableKey = [];
  userview;
  constructor(private db:AngularFireDatabase,private adminservice: AdminService ,public afauth: AngularFireAuth) { 
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
      this.tableview.length = 0;
      user.forEach(element => {
        this.tableview.push(element.val());
        this.tableKey.push(element.key);
      });
    })
    console.log("clicked")
  }

  delete = function(i) {
    const  key = this.tableKey[i]
    this.db.list('/COM/' + key, {preserveSnapshot:true}).remove()
  }
  ngOnInit() {
  }

}
