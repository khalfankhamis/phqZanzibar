import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit{

  regionForm!:FormGroup

  constructor(private route:Router,private regionService:RegionService){}

  ngOnInit(): void {
    this.regionControl()
  }


  regionControl(){
    this.regionForm=new FormGroup({
      region_name:new FormControl(null,[Validators.required])
    })
  }


  onList(){
    this.route.navigateByUrl("regionList")
  }

  onSave(){
    const values=this.regionForm.value;

    this.regionService.add(values).subscribe(()=>{
      return this.route.navigateByUrl("regionList")
    })
  }

}
