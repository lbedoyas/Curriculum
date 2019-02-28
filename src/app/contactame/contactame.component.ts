import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {

  title = 'Contactame';
  lat = 6.1716046;
  lng = -75.6403902;

  constructor() { }

  ngOnInit() {
  }

}
