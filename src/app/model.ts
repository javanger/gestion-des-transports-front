export abstract class Vehicule {
  immatriculation: string;
  marque: string;
  modele: string;
  nbPlaces: number;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

export class VehiculeSociete extends Vehicule{
  categorie: CategorieVehicule;
  urlPhoto: string;

  constructor(obj:any,categorie:CategorieVehicule, urlPhoto:string){
    super(obj);
    this.categorie=categorie
    this.urlPhoto=urlPhoto
  }
}

export class VehiculePersonnel extends Vehicule {

  constructor(obj: any) {
    super(obj)
  }
}


export enum CategorieVehicule{

  MICRO_URBAINE = "Micro-urbaines", 
	MINI_CITADINE ="Mini-citadines", 
	CITADINE_POLYVALENTE = "Citadines polyvalentes", 
	COMPACTE =  "Compactes", 
	BERLINE_TAILLE_S =  "Berlines Taille S", 
	BERLINE_TAILLE_M = "Berlines Taille M", 
	BERLINE_TAILLE_L = "Berlines Taille L", 
	SUV = "Suv", 
	TOUT_TERRAINS = "Tout-terrains", 
	PICK_UP = "Pick-up"
}

export class Annonce{
  id:number
   adresseDepart:string
   adresseArrive:string
   duree:string
   distance:number
   vehicule:Vehicule
   nombrePlace:number
   date:Date
   auteurAnnonce:Collaborateur
   reservations:Array<Reservation>
   status:Status
   
   constructor(object:any){
       Object.assign(this, object)
   }
  }
