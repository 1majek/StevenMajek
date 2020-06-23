import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  nombre: String = 'Steven Majek';
  // tslint:disable-next-line:max-line-length
  descripcionEsp: String = 'Joven con mucha ambición, facilidad en aprendizaje, dispuesto a aumentar su conocimiento laboral, creador de páginas web, aplicaciónes web, aplicaciónes en Andriod, Web services etc.. BackEnd y FrontEnd';
  // tslint:disable-next-line:max-line-length
  descripcionEn: String = 'Young man with a lot of ambition, ease in learning, willing to increase his working knowledge, creator of web pages, web applications, applications in Andriod, Web services etc. BackEnd and FrontEnd';
  translate: Boolean = false;
  myPic = '/assets/me3.jpg';
  taxiImg = '/assets/taxi.png';
  majekImg = 'assets/majek.jpg';
  anio = new Date();
  constructor() { }

  ngOnInit() {
  }

}
