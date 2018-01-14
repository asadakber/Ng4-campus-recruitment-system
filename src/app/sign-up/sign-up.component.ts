import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn, moveInLeft } from '../router.animations';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [moveIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
 
})
export class SignUpComponent implements OnInit {
  email;
  password;
  type;
  constructor(public studentservice: StudentService,private db: AngularFireDatabase, private afauth: AngularFireAuth) {}

  Register() {
     this.studentservice.signup(this.email, this.password, this.type);
     this.email = '';
     this.password = '';
     this.type = '';
   }

  ngOnInit() {
  }

}
