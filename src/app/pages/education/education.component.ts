import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  ngOnInit(): void {
    this.formControl()
  }

  EduForm!:FormGroup

  constructor(private route:Router,private educationService:EducationService){}


  formControl(){
    this.EduForm=new FormGroup({
      education_level:new FormControl(null,[Validators.required])

    })
  }

  onSave(){
    const values=this.EduForm.value;
    this.educationService.add(values).subscribe(()=>{
      this.route.navigateByUrl("education-list")

    })
  }

  onList(){
    this.route.navigateByUrl("education-list")
  }

}
