import { Component, OnInit } from '@angular/core';
import { moveIn } from '../router.animations';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
    animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class AdminLoginComponent implements OnInit {
  // email: string;
  // password: string;
// user = {email:'',password:'',type:'admin'};
  constructor(public adminservice: AdminService) { }

  // Adminlogin() {
  //    this.adminservice.Adminlogin(this.email, this.password);
  //  }

  ngOnInit() {
  }

}
