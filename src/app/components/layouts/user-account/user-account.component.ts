import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  loggedUser: User;
	// Enable Update Button

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.loggedUser = this.authService.getLoggedInUser();
	}

}
