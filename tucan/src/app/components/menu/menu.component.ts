import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }

  irPerfil(){
    this.router.navigate(['/profile']);
  }

  irHome(){
    this.router.navigate(['/tab-principal']);
  }

}
