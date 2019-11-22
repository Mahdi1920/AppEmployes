import { Injectable } from '@angular/core';
import { Employe } from './Employe';



@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  //[x: string]: any;
  empl:Employe[];
  employes = [     
    new Employe(12345, 'Mounir Ben Ali', 'Directeur', true),
    new Employe(12587,'Maha Ben Nasr', 'Ingénieur', false),
    new Employe(85719, 'Alia Moalla', 'Secrétaire', false),     
    new Employe(45879,'Sami Toumi', 'Ingénieur', true) 
  ];
  getEmployeByMatricule(m:number):Employe
  {
    for(let e of this.employes)
      if(e.matricule===m)
        return e ;
  }
  /*()
  {
    const emp=new Employe(14789,'Ahmed Ben Salah','Sous Directeur',true);
    this.employes.push(emp);
  }*/
  constructor() { }
  
    
}
    


