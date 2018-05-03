import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horaire-covoiturage-creation',
  templateUrl: './horaire-covoiturage-creation.component.html',
  styleUrls: ['./horaire-covoiturage-creation.component.scss']
})
export class HoraireCovoiturageCreationComponent implements OnInit {

  heure : Array<String> = [];
  minute : Array<String> = [];

  constructor() { }

  ngOnInit() {
    for(var i:number=0;i<24;i++){
      if(i<10)
        this.heure.push("0"+i)
      else
        this.heure.push("" + i)
    }

    for(var i:number=0;i<60;i+=10){
      if(i<10)
        this.minute.push("0"+i)
      else
        this.minute.push("" + i)
    }

  }

}
