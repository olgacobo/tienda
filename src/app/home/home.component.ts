import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // le digo a mi swiper que clase del css vamos a llamar
    this.mySwiper = new Swiper('.swiper-container');
  }

}
