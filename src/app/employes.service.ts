import { Injectable } from '@angular/core';
import { Employe } from './Employe';



@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  [x: string]: any;
  employes = [     
    new Employe(12345, 'Mounir Ben Ali', 'Directeur', true),
    new Employe(12587,'Maha Ben Nasr', 'Ingénieur', false),
    new Employe(85719, 'Alia Moalla', 'Secrétaire', false),     
    new Employe(45879,'Sami Toumi', 'Ingénieur', true) 
  ];
  getEmployeByMatricule(m:number):Employe
  {
    for(let e of this.employes)
      if(e._matricule===m)
        return e ;
  }
  constructor() { }
  
    
}
    


