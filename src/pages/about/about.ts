import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import quotes from '../../quotes/quotes';
import { NavController } from 'ionic-angular';
import { Quote } from '@angular/compiler';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public modal: ModalController) {

  }
 showInspirational()
   {
      let profileModal = this.modal.create(quotes, { id: Number, person: Text, text: Text });
      profileModal.present();
   }

showAbility() 
   {    
    this.navCtrl.push(Quote, {});
   }

showEnthusiasm()
   {
    this.navCtrl.push(QuotesPage, { 
  });

   }

showMotivational()
    {

    }


}

