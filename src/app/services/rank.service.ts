import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankService {
  private rankUrl=String ("http://localhost:8080/api/v1/rank")

  constructor(private httpClient:HttpClient) { }


  add(body:any){
    return this.httpClient.post(this.rankUrl,body)

  }

  getAll(){
    return this.httpClient.get(this.rankUrl)

  }

  getById(region_id:number){
    const url=`${this.rankUrl}/${region_id}`
    return this.httpClient.get(url)

  }

  update(body:any){
    return this.httpClient.put(this.rankUrl,body)
  }

  delete(body:any){
    return this.httpClient.delete(this.rankUrl)
  }
}
