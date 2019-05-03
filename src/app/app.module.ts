import { AuthGuardService } from './components/services/auth-guard.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';//for notifications

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';//navbar
import { BlogComponent } from './core/blog/blog.component';//blog page
import { BlogSingleComponent } from './core/blog-single/blog-single.component';//Blog-single
import { FooterComponent } from './components/layouts/footer/footer.component';//footer
import { LoginComponent } from './components/layouts/login/login.component';//admin-login
// firebase auth imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from '../environments/environment';//for firebase credentials.

// auth guards
import { UserService } from './components/services/user.service';
import { AuthService } from './components/services/auth.service';


import { FormBuilder } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { UserAccountComponent } from './components/layouts/user-account/user-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    BlogSingleComponent,
    FooterComponent,
    LoginComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    
    
    
    // Firebase Import Defns.
    AngularFireModule.initializeApp(environment.firebase),//firebase api path
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [AuthService,AuthGuardService,UserService,AngularFirestore,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
