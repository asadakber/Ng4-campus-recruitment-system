import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { JobService } from '../job.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class PostjobComponent implements OnInit {
  name: any;
  userView;
  constructor(private db: AngularFireDatabase,private jobservice: JobService,public afauth: AngularFireAuth, private router: Router) {
    this.afauth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

    this.jobView();
  }
   form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('',Validators.required),
      salary: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
    })
  }

  onsubmit = function(user) {
   this.jobservice.jobprofile(user);
  }
  Viewprofile:FirebaseListObservable<any>
  jobView() {
    this.Viewprofile = this.db.list('/JOB/', {preserveSnapshot:true})
    this.Viewprofile.subscribe(user => {
      user.forEach(element => {
        console.log(element.val());
      });
    })
    console.log("clicked!");
  }
 
}
