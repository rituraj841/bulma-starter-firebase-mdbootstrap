import { AuthGuardService } from './components/services/auth-guard.service';
import { LoginComponent } from './components/layouts/login/login.component';
import { BlogSingleComponent } from './core/blog-single/blog-single.component';
import { BlogComponent } from './core/blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './components/layouts/user-account/user-account.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog-single', component: BlogSingleComponent,canActivate :[AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'user-account', component: UserAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
