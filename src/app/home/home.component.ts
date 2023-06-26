import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  archives = [
    { year: 2023, month: 1},
    { year: 2023, month: 2},
    { year: 2023, month: 3},
    { year: 2023, month: 4}
  ]

  constructor() { }

  ngOnInit() {
  }

 
}
