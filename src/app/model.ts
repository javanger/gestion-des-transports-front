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
