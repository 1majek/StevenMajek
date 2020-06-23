import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio = new Date();
  nombre = 'Steven Majek';
  translate: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
