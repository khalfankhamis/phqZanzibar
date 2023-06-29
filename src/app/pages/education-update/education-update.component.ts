import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent implements OnInit{

  EduForm!:FormGroup

  ngOnInit(): void {
    this.route.params.subscribe((paramsValue:any)=>{
      console.log("value are=>",paramsValue)
      const id=paramsValue.id;
      this.fetchById(id);

    })

    this.formControl();


  }
  formControl() {
    this.EduForm=new FormGroup({
      id:new FormControl(null),
      education_level:new FormControl(null,[Validators.required])
    })

  }
  fetchById(id: number) {
    this.educationService.getById(id).subscribe((response:any)=>{
      console.log(response)
      this.EduForm.get('id')?.setValue(response.id)
      this.EduForm.get('education_level')?.setValue(response.education_level)

    })
    
  }

  constructor(private route:ActivatedRoute,private educationService:EducationService,private routing:Router){}


  onList(){
    this.routing.navigateByUrl("education-list")

  }

  onSave(){
    const values=this.EduForm.value;
    this.educationService.add(values).subscribe((response)=>{
      this.routing.navigateByUrl("education-list")

    })
    
  }

  // onSave(){
  //   const values=this.rankForm.value;
  //   this.rankServices.add(values).subscribe((response)=>{
  //     this.routes.navigateByUrl('rank-list')
  //   })
  // }

}
