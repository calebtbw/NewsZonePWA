import { LoadingController, AlertController } from '@ionic/angular';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.page.html',
  styleUrls: ['./admin-user-details.page.scss'],
})
export class AdminUserDetailsPage implements OnInit {
  userForm: FormGroup;
  id = null;
  avatar = null;
  constructor(private route: ActivatedRoute, private usersService: UsersService, private fb: FormBuilder,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    let id = this.route.snapshot.paramMap.get('id');

    if (id != 'null') {
      this.id = id;
      this.usersService.getUserDetails(this.id).subscribe(res => {
        this.userForm.patchValue(res);
        this.avatar = res.avatar;
      });
    }
  }

  async createOrUpdate() {
    let loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    let user = this.userForm.value;

    if (this.id) {
      this.usersService.updateUser(this.id, user).subscribe(res => {
        loading.dismiss();
        this.router.navigateByUrl('/admin/users');
      }, async err => {
        loading.dismiss();

        let alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Failed to update User',
          buttons: ['OK']
        });
        alert.present();
      });
    } else {
      this.usersService.addUser(user).subscribe(res => {
        loading.dismiss();
        this.router.navigateByUrl('/admin/users');
      }, async err => {
        loading.dismiss();

        let alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Failed to add User',
          buttons: ['OK']
        });
        alert.present();
      });
    }
  }

  delete() {
    this.usersService.deleteUser(this.id).subscribe(res => {
      this.router.navigateByUrl('/admin/users');
    });
  }

  avatarChanged(event) {
    console.log('event: ', event);
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;

    if (target.files && target.files[0]) {
      const file = target.files[0];
      console.log('file: ', file);

      this.usersService.uploadAvatar(this.id, file).subscribe(res => {
        console.log('new avatar: ', res);
        this.avatar = res.user.avatar;
      })
    }
  }
}
