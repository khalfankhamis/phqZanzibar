import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RankService } from 'src/app/services/rank.service';

@Component({
  selector: 'app-rank-update',
  templateUrl: './rank-update.component.html',
  styleUrls: ['./rank-update.component.css']
})
export class RankUpdateComponent implements OnInit{

  rankForm:any

  constructor(private route:ActivatedRoute,private routes:Router,private rankServices:RankService){}

  ngOnInit(): void {
    this.route.params.subscribe((paramsValue:any)=>{
      console.log("the value are",paramsValue);

      const id=paramsValue.id;
      this.fetchByRanId(id);
    })

    this.formControl()

  }
  fetchByRanId(id: number) {
    this.rankServices.getById(id).subscribe((response:any)=>{
      this.rankForm.get('id').setValue(response.id)
      this.rankForm.get('rank_name').setValue(response.rank_name)

    })
  }

  formControl(){
    this.rankForm=new FormGroup({
      id:new FormControl(null),
      rank_name:new FormControl(null,[Validators.required])
    })
  }

  onList(){
    this.routes.navigateByUrl("rank-list")

  }
  onSave(){
    const values=this.rankForm.value;
    this.rankServices.add(values).subscribe((response)=>{
      this.routes.navigateByUrl('rank-list')
    })
  }

  onDelete(){
    const values=this.rankForm.value;
    this.rankServices.delete(values).subscribe((response)=>{
      this.routes.navigateByUrl('rank-list')
    })
    
  }

}
