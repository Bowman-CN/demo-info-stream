import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  layoutName: string = "stream";

  constructor() { }

  ngOnInit() {
  }

  layoutChange(event: any) {
    console.log(event);
    if (event.checked) {
      this.layoutName = "column"
    } else {
      this.layoutName = "stream"
    }

  }

}
