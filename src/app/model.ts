export class Vehicule {
  immatriculation: string;
  marque: string;
  modele: number;
  categorie: CategorieVehicule;
  nbPlaces: string;
  urlPhoto: string;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}
export class Employe{
  matricule :String;
  nom:String;
  prenom:String;
  email:String;
  motDeDasse:String;
  urlDhoto:String;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}
export class Chauffeur extends Employe{
permis : String;
telephone : String;
  constructor(obj: any) {
    super(Employe);
    Object.assign(this, obj);
  }


}
export class VehiculeSociete extends Vehicule{

  constructor(obj: any) {
    super(Vehicule);
    Object.assign(this, obj);
  }
}
export class Reservation{

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}
export class ReservationVehiculeSociete extends Reservation{
dateDebut : Date;
dateFin : Date;
chauffeur : Chauffeur;
vehiculeSociete : VehiculeSociete;
  constructor(obj: any) {
    super(obj);
    Object.assign(this, obj);
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
