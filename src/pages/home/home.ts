import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit  {

	constructor(public navCtrl: NavController) {
  	}

	ngAfterViewInit() {
		$('.tabbar').hide();
		$('ion-header').hide();
	}
}
