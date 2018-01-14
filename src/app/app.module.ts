import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MdRadioModule, MdDialogModule, MdButtonModule, MdSortModule, MdCheckboxModule, MdTableModule, MdCardModule, MdInputModule, MdGridListModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentComponent } from './student/student.component';
import { CompanyComponent } from './company/company.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { routes } from './app.routes';
import { StudentService } from './student.service';
import { AdminService } from './admin.service';
import { CompanyService } from './company.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { CompanyviewComponent } from './companyview/companyview.component';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { CompanydataComponent } from './companydata/companydata.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { AdminstudentviewComponent } from './adminstudentview/adminstudentview.component';
import { AdmincompanyviewComponent } from './admincompanyview/admincompanyview.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { JobService } from './job.service';
import { ViewjobComponent } from './viewjob/viewjob.component';
import { AdminjobviewComponent } from './adminjobview/adminjobview.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { UserviewComponent } from './userview/userview.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    StudentComponent,
    CompanyComponent,
    SignUpComponent,
    AdmindashboardComponent,
    StudentdashboardComponent,
    StudentprofileComponent,
    StudentdataComponent,
    CompanyviewComponent,
    CompanydashboardComponent,
    CompanydataComponent,
    CompanyprofileComponent,
    StudentviewComponent,
    AdminstudentviewComponent,
    AdmincompanyviewComponent,
    PostjobComponent,
    ViewpostComponent,
    ViewjobComponent,
    AdminjobviewComponent,
    ApplicantComponent,
    UserviewComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdInputModule,
    routes,
    MdCardModule,
    MdTableModule,
    MdSortModule,
    MdDialogModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [StudentService,CompanyService,AdminService,JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
