import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import $ from 'jquery';
import { AboutPage } from '../about/about';

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

	login() {
		let self = this;
	    $.post('http://inexact-pastes.000webhostapp.com/gs/login',
		    {
		        username : $('#txt-username').val(),
		        password : $('#txt-password').val()
		    },
		    function(data, status){
		    	let jsonData = JSON.parse(data);
		        if(jsonData.response == 'Not Authenticated') {
					alert('Not Authenticated');
		        } else {
					self.navCtrl.push(AboutPage);
		        }
	    	}
	    );
	}
}
