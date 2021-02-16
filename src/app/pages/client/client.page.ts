import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  users: Observable<any[]>;
  news: Observable<any[]>;

  activeView = 'news';
  

  constructor(private usersService: UsersService, private newsService: NewsService, private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.users = this.usersService.getStaff();
    this.news = this.newsService.getNews();
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigateByUrl('/');
    });
  }
}
