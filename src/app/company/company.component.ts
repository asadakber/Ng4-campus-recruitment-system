import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class CompanyComponent implements OnInit {
//  email: string;
//  password: string;
  constructor(public companyservice: CompanyService) { }

  //    Companysignup() {
  //    this.companyservice.Companysignup(this.company.email, this.company.password)
  //  }

  //   Companylogin() {
  //    this.companyservice.Companylogin(this.email, this.password)
  //  }

  ngOnInit() {
  }

}
