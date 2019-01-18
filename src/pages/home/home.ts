import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MostrarPage } from '../mostrar/mostrar';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mostrar=MostrarPage;
  favoritos=[];
  favorito=FavoritosPage;


  casas=[
    {
      precio: '$7,000,000',
      pais: 'Mexico',
      tipo: 'Casa Bugambilias Zona Panorámica',
      ciudad: 'Zapopan',
      colonia: 'Bugambilias',
      cuartos: '5 cuartos',
      banos: '5 baños',
      foto:'..//assets/buga1.jpg',
      coch:'Si tiene cochera'

    },
    {
      precio: '€2.700.000',
      tipo: 'Villa Behavis ',
      pais:'España',
      ciudad: 'Capanes Sur',
      colonia: 'Benahavis',
      cuartos: '6 cuartos',
      banos: '6/1 baños',
      foto:'..//assets/benahavis.png',
      coch:'Si tiene cochera'

    },
    {
      precio: '$3,175,000',
      tipo: 'Casa 39640 MALLARD',
      pais:'Estados Unidos',
      ciudad: 'Mallard',
      colonia: 'Bass Lake',
      cuartos: '5 cuartos',
      banos: '4/1 baños',
      foto:'..//assets/mallard.jpg',
      coch:'Si tiene cochera'

    },

    {
      precio: '$145,000,000',
      tipo: 'Casa de Arte Natural Contemporánea',
      pais:'México',
      ciudad: 'Ciudad de México',
      colonia: 'Polanco',
      cuartos: '4 cuartos',
      banos: '5/3 baños',
      foto:'..//assets/Contemp.aspx',
      coch:'Si tiene cochera'

    },
    {
      precio: '$28,800,000 CAD',
      tipo: 'Fawn Bluff ',
      pais:'Canada',
      ciudad: 'British Columbia',
      colonia: 'Bute Inlet',
      cuartos: '11 cuartos',
      banos: '11/2 baños',
      foto:'..//assets/canada.jpg',
      coch:'Si tiene cochera'

    },
    {
      precio: '$28,800,000 CAD',
      tipo: 'St Edmunds Terrace ',
      pais:'England',
      ciudad: 'London',
      colonia: 'Ebury Street',
      cuartos: '4 cuartos',
      banos: '4 baños',
      foto:'..//assets/edmunds.aspx',
      coch:'Si tiene cochera'

    },
    {
      precio: '$15,000,000 USD',
      tipo: '41 Great Jones Street ',
      pais:'United States',
      ciudad: 'New York',
      colonia: 'Jones Street',
      cuartos: '3 cuartos',
      banos: '3.5 baños',
      foto:'..//assets/jones.jpg',
      coch:'Si tiene cochera'

    },
    {
      precio: '$9,324,344 USD',
      tipo: '34 Carthona Avenue ',
      pais:'Australia',
      ciudad: 'Sydney',
      colonia: 'New South Wales',
      cuartos: '4 cuartos',
      banos: '3.5 baños',
      foto:'..//assets/carthona.aspx',
      coch:'Si tiene cochera'

    },
    {
      precio: '$22,227,288 USD',
      tipo: 'Propiedad Renovada ',
      pais:'España',
      ciudad: 'Mallorca',
      colonia: 'Palma',
      cuartos: '4 cuartos',
      banos: '3.5 baños',
      foto:'..//assets/espa.aspx',
      coch:'Si tiene cochera'

    },
    {
      precio: '$9,895,133 USD',
      tipo: 'Mansion en Campo de Mar ',
      pais:'España',
      ciudad: 'Mallorca',
      colonia: 'Palma',
      cuartos: '10 cuartos',
      banos: '14 baños',
      foto:'..//assets/esp.aspx',
      coch:'Si tiene cochera'

    }


    



  ]

  constructor(public navCtrl: NavController) {

  }

  clickMostrar(c){
    this.navCtrl.push(this.mostrar, {casa:c, favorito:this.favoritos});
  }

  clickFavoritos(){
    this.navCtrl.push(this.favorito, {favorito:this.favoritos});

  }

}
