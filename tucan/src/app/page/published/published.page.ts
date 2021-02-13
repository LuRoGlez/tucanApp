import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-published',
  templateUrl: './published.page.html',
  styleUrls: ['./published.page.scss'],
})
export class PublishedPage implements OnInit {

  constructor(public profilePage: ProfilePage) { }

  ngOnInit() {
  }

}
