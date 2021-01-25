import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.page.html',
  styleUrls: ['./pub.page.scss'],
})
export class PubPage implements OnInit {

  SportLive = true;
  LiveMusic = false;

  constructor() { }

  ngOnInit() {
  }

}
