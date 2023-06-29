import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit{
  regionList:any

  constructor(private route:Router,private regionService:RegionService){}

  ngOnInit(): void {
    this.fetchAllRegion()
  }


  fetchAllRegion(){
    this.regionService.getAll().subscribe((response:any)=>{
      this.regionList=response;
    })

  }

  onEdit(item:any){
    this.route.navigateByUrl("region-update/"+item.region_id)

  }

  onAdd(){
    this.route.navigateByUrl("region")
  }

}
