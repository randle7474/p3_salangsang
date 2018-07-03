import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quotescollection: {category: string, quotes: Quote[], Icon: string};

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    
  }

}
