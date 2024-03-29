import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  // experienceList:any;
  // constructor(private datosPortfolio:PortfolioService) { }

  // ngOnInit(): void {
  //   this.datosPortfolio.obtenerDatos().subscribe(data=>{
  //     this.experienceList=data.experience;
  //   });
  // }
  experienceList:any[];
  constructor(private portfolioService:PortfolioService) { }

    ngOnInit(): void {
      this.obtenerExperiences();
    }

    private obtenerExperiences(){
      this.portfolioService.obtenerDatos().subscribe(data =>{
        this.experienceList = data;

      })
    }
}
