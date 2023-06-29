import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private regUrl=String("http://localhost:8080/api/v1/region")

  constructor(private httpClient:HttpClient) { }


  add(body:any){

    return this.httpClient.post(this.regUrl,body)
  }

  getAll(){
    return this.httpClient.get(this.regUrl)

  }


  getById(region_id:number){
    const url=`${this.regUrl}/${region_id}`
    return this.httpClient.get(url)
  }


  update(){}

  delete(){}
}
