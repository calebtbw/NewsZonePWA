import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
})
export class AdminUsersPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigateByUrl('/');
    });
  }

}
