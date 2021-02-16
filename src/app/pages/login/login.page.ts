import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loadingCtrl: LoadingController, private auth: AuthService, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['something@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(6)]]
    });
  }

  async login() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.auth.login(this.loginForm.value).subscribe(
      user => {
        loading.dismiss();
        let role = user['role'];
        if (role == 'OWNER' || role == 'MANAGEMENT' || role == 'DEVELOPER' || role == 'TECH SUPPORT L2' || role == 'TECH SUPPORT L1') {
          this.router.navigateByUrl('/admin/users');
        } else if (role == 'CLIENT') {
          this.router.navigateByUrl('/client');
        }
      },
      async err => {
        loading.dismiss();

        let alert = await this.alertCtrl.create({
          header: 'Error',
          message: err.error.message,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

}
