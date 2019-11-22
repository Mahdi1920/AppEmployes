import { Component, OnInit } from '@angular/core';
import {Employe} from '../Employe';
import { EmployesService} from '../employes.service';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {
  lesEmployes :Employe[];
  constructor(private employesService:EmployesService) { }

  ngOnInit() {
    this.lesEmployes = this.employesService.employes;
  }

}
