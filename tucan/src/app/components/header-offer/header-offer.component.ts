import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-offer',
  templateUrl: './header-offer.component.html',
  styleUrls: ['./header-offer.component.scss'],
})
export class HeaderOfferComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
