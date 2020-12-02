import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  taxiImg = 'assets/taxi.png';
  majekImg = 'assets/majek.jpg';
  myPic = 'assets/me.jpg';
  taxiAdd = 'assets/TaxiAdd.png';
  taxiDetails = 'assets/TaxiDetails.png';
  taxiEdit = 'assets/TaxiEdit.png';
  taxiInfo = 'assets/TaxiInfo.png';
  taxiReservas = 'assets/TaxiReservas.png';
  taxiReservasHechas = 'assets/TaxiReservasHechas.png';
  taxiSearch = 'assets/TaxiSearch.png';
  majekDetails = 'assets/majekDetails.jpg';
  majekHome = 'assets/majekHome.jpg';
  majekLogin = 'assets/majekLogin.jpg';
  majekLoginForm = 'assets/majekLoginForm.jpg';
  majekRate = 'assets/majekRate.jpg';
  majekRegi = 'assets/majekRegi.jpg';
  majekSearch = 'assets/majekSearch.jpg';
  majekSell = 'assets/majekSell.jpg';
  majekTop = 'assets/majekTop.jpg';

  constructor() { }

  ngOnInit() {
  }

}
