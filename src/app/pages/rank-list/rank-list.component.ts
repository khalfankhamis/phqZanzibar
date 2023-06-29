import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RankService } from 'src/app/services/rank.service';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.css']
})
export class RankListComponent implements OnInit {

  ngOnInit(): void {
    this.getAll();
  }

  rankList:any

  constructor(private rnkServ:RankService,private route:Router){}

  getAll(){
     this.rnkServ.getAll().subscribe((resposne:any)=>{
      this.rankList=resposne;

    })
  }

  onAdd(){
    return this.route.navigateByUrl("rank")
  }

  onEdit(item:any){
    this.route.navigateByUrl("rank-update/"+item.id);
  }
  onDelete(item:any){
    this.rnkServ.delete(item).subscribe({
      
    })
  }

}
