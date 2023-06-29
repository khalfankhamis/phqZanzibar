import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit{
  educationList:any

  constructor(private route:Router,private educationService:EducationService){}

  ngOnInit(): void {

    this.fetchAll();
  }
  fetchAll() {
    this.educationService.getAll().subscribe((response)=>{
      this.educationList=response;
    })
  }


  onEdit(item:any){
    this.route.navigateByUrl("education-update/"+item.id)
  }

  onAdd(){
    return this.route.navigateByUrl("education")
  }

}
