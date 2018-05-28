import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isIn : boolean = false;   // store state
  isDown : boolean = false;   // store state
  current : any;
  constructor() { }
  ngOnInit() {
    this.current = new Date();
  }
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  toggleDropDown() { // click handler
    let bool = this.isDown;
    this.isDown = bool === false ? true : false;
  }
}
