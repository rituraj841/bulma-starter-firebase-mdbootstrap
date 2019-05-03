import { User } from './../../models/user';
import { NotificationService } from './../../services/toastr.service';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

// importing router for routes
import { Router, ActivatedRoute } from "@angular/router";

// create a service(auth.service.ts) for user auth and importing
// importing toastr service for notifications
// importing user db model
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createUser;//variable

  constructor(
    // constructors for auth and user services
    private authService: AuthService,
    private userService: UserService,
    private toastService: NotificationService,//for notifications
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createUser = new User();
  }


  ngOnInit() {
  }
  // Google Signin
  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res) => {
        if (res.additionalUserInfo.isNewUser) {
          this.userService.createUser(res.additionalUserInfo.profile);
        }
        const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || '/dashboard';
        // location.reload();
        this.router.navigate(["/"]);
        this.toastService.showSuccess("Login Success", "Welcome To Admin Console");
        // this.toastService.showinfo("Info", "showinfo");
        // this.toastService.warning("warning", "warning");
        // this.toastService.error("error", "error");
      })
      .catch((err) => {
        this.toastService.error("Error Occured", "Please try again later");
      });
  }
}
