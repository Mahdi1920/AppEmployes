import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
import { Employe } from '../Employe';

@Component({
  selector: 'app-selected-employe',
  templateUrl: './selected-employe.component.html',
  styleUrls: ['./selected-employe.component.css']
})
export class SelectedEmployeComponent implements OnInit {
mat:number;


  constructor(private employesService:EmployesService) { }

  ngOnInit() {
    this.mat = this.employesService.snapshot.params['matricule'];
    
  }

}
