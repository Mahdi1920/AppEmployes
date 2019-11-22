import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
import { Employe } from '../Employe';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-selected-employe',
  templateUrl: './selected-employe.component.html',
  styleUrls: ['./selected-employe.component.css']
})
export class SelectedEmployeComponent implements OnInit {
mat:number;
employe: Employe;
  constructor(private activatedRouter:ActivatedRoute,private employesService:EmployesService,private router:Router) { }

  ngOnInit() {
    //this.mat = this.employesService.snapshot.params['matricule'];
    let mat= Number(this.activatedRouter.snapshot.params['matricule']);
    this.employe = this.employesService.getEmployeByMatricule(mat);
    
  }

}
