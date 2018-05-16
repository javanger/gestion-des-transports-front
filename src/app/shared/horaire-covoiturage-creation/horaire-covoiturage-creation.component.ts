import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'horaire-covoiturage-creation',
  templateUrl: './horaire-covoiturage-creation.component.html',
  styleUrls: ['./horaire-covoiturage-creation.component.scss']
})
export class HoraireCovoiturageCreationComponent implements OnInit {

  heureSelect : Array<String> = [];
  minuteSelect : Array<String> = [];

  horaire:any = {};

  @Output() formEventHoraire: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.formEventHoraire.emit(this.horaire);
    for(var i:number=0;i<24;i++){
      if(i<10)
        this.heureSelect.push("0"+i)
      else
        this.heureSelect.push("" + i)
    }

    for(var i:number=0;i<60;i+=10){
      if(i<10)
        this.minuteSelect.push("0"+i)
      else
        this.minuteSelect.push("" + i)
    }
    
    

  }

}
