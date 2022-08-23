import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "SmartPhone shop";
  NumberItems = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
