import { Component, OnInit, Inject } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';
import { AdminService } from '../admin.service';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class UserviewComponent implements OnInit {
  Userview:FirebaseListObservable<any>;
  tableview = [];
  userkey = [];
  constructor(private db: AngularFireDatabase, public dialog: MdDialog, private adminservice: AdminService) { 
    this.userview();
  }

  ngOnInit() {
  }



  userview(){
    this.Userview = this.db.list('/user/', {preserveSnapshot:true})
    this.Userview.subscribe(snapshot => {
      this.userkey = [];
      this.tableview = [];
      snapshot.forEach(snapshots => {
        this.userkey.push(snapshot.key);
        snapshots.forEach(element => {
          this.tableview.push(element.val());
        })
      });
    })
    console.log("clicked")
  }

  delete = function(i) {
    const  key = this.valueKey[i]
    this.db.list('/APPLY/' + key, {preserveSnapshot:true}).remove()
   }



}




 
