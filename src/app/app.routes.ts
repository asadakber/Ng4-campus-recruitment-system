import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CompanyComponent } from './company/company.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
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
import { ViewjobComponent } from './viewjob/viewjob.component';
import { AdminjobviewComponent } from './adminjobview/adminjobview.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { UserviewComponent } from './userview/userview.component';
export const router: Routes = [
    {
        path: '',
        redirectTo: 'student',
        pathMatch: 'full',
    },

    {
        path: 'student',
        component: StudentComponent,
    },

    {
        path: 'signup',
        component: SignUpComponent
    },

    {
        path: 'company',
        component:CompanyComponent
    },

    {
        path: 'admin',
        component:AdminLoginComponent
    },

    
    {
        path: 'student-dashboard',
        component:StudentdashboardComponent,
    },


    {
        path: 'admin-dashboard',
        component:AdmindashboardComponent
    },

    {
       path: 'student-profile',
       component:StudentprofileComponent
    },

    {
        path: 'student-data',
        component:StudentdataComponent
    },

    {
        path: 'company-view',
        component:CompanyviewComponent
    },

    {
        path: 'company-dashboard',
        component:CompanydashboardComponent
    },

     {
        path: 'company-data',
        component:CompanydataComponent
    },

     {
        path: 'company-profile',
        component:CompanyprofileComponent
    },

     {
        path: 'student-view',
        component:StudentviewComponent
    },

    {
        path: 'ASV',
        component:AdminstudentviewComponent
    },

    {
        path: 'ACV',
        component:AdmincompanyviewComponent
    },

    {
        path: 'postjob',
        component:PostjobComponent
    },

    {
        path: 'viewpost',
        component:ViewpostComponent
    },

    {
        path: 'viewjob',
        component:ViewjobComponent
    },

    {
        path: 'AJV',
        component:AdminjobviewComponent
    },

    
    {
        path: 'applicant',
        component:ApplicantComponent
    },

    {
        path: 'userview',
        component: UserviewComponent
    }


]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);