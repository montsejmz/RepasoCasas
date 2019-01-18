import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
  casa;
  favorito_p=FavoritosPage;
  favoritos=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.casa= this.navParams.get('casa');
  this.favoritos= this.navParams.get('favorito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarPage');
  }

  Agregar(){
    
    this.favoritos.push(this.casa);

    this.navCtrl.pop();
  }

}
