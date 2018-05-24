import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Family: any;

  constructor(public navCtrl: NavController) {

    this.Family = [{
      FileName: "GrandFather",
      Checked: false,
      Children: [
        {
          FileName: "Mom",
          Checked: false,

          Children: {
            FileName: "Me",
            Checked: false,
          }
        },
        {
          FileName: "Dad",
          Checked: false,
        }
      ]
    }]
  }

  SaveFamily() {
    console.log(this.Family);
  }

}
