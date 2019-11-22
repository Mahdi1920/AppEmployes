import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent implements OnInit {

  constructor(private router:Router) { }
  onlisteEmploye()   
  {      
    this.router.navigate(['/employesList']); 
  } 
  ngOnInit() {
  }

}
