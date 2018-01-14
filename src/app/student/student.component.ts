import { Component, OnInit } from '@angular/core';
import { moveIn } from '../router.animations';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''},

})
export class StudentComponent implements OnInit {
  email;
  password;
  status: 'active';
  constructor(public studentservice: StudentService) {}

     login() {
     this.studentservice.signin(this.email, this.password);
     this.email = '';
     this.password = '';
   }
   
  ngOnInit() {
  }

}
