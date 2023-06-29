import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RankService } from 'src/app/services/rank.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit{

  rankForm!:FormGroup

  ngOnInit(): void {
    this.rankControl();

  }

  constructor(private route:Router,private rnkSrvice:RankService){}


  rankControl(){
    this.rankForm=new FormGroup({
      rank_name:new FormControl(null,[Validators.required])
    })
  }

  
  onSave(){
    const values=this.rankForm.value;
    this.rnkSrvice.add(values).subscribe((response:any)=>{
      alert("New Record inserted successfully");
      return this.route.navigateByUrl("rank-list")
    }) 

  }
  onList(){
    this.route.navigateByUrl("rank-list")
  }

}
