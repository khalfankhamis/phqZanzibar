import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region-update',
  templateUrl: './region-update.component.html',
  styleUrls: ['./region-update.component.css']
})
export class RegionUpdateComponent implements OnInit {

  regionForm!:FormGroup;

  ngOnInit(): void {
    this.routes.params.subscribe((paramsValue:any)=>{
      console.log("values are",paramsValue)
      const region_id=paramsValue.region_id;
      this.fetchRegionId(region_id);
    })

    this.formControl();
  }
  formControl() {
    this.regionForm=new FormGroup({
      region_id:new FormControl(null),
      region_name:new FormControl(null,[Validators.required])
    })

  }
  fetchRegionId(region_id: number) {
    this.regionServices.getById(region_id).subscribe((response:any)=>{
      console.log(response)
      this.regionForm.get('region_id')?.setValue(response.region_id)
      this.regionForm.get('region_name')?.setValue(response.region_name)

    })

  }
  onList(){
    this.route.navigateByUrl("regionList")

  }


  onSave(){
    const value=this.regionForm.value;
    this.regionServices.add(value).subscribe(()=>{
      this.route.navigateByUrl("regionList")

    })
  }
  constructor(private route:Router,private regionServices:RegionService,private routes:ActivatedRoute){}

}
