import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-createoffer',
  templateUrl: './createoffer.page.html',
  styleUrls: ['./createoffer.page.scss'],
})
export class CreateofferPage implements OnInit {

  empresa:any;
  
  constructor(public profilePage: ProfilePage) {
    console.log(this.profilePage.empresa)
  }

  ngOnInit() {
  }

}
