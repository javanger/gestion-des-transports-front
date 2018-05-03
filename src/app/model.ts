export abstract class Vehicule {
  immatriculation: string;
  marque: string;
  modele: string;
  nbPlaces: number;

  constructor(obj: any) {
    Object.assign(this, obj);
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
