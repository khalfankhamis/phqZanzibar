import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private eduUrl=String("http://localhost:8080/api/v1/education")

  constructor(private httpClient:HttpClient) { }


  add(body:any){
    return this.httpClient.post(this.eduUrl,body)
  }

  getAll(){
    return this.httpClient.get(this.eduUrl)

  }

  getById(id:number){
    const url=`${this.eduUrl}/${id}`
    return this.httpClient.get(url)

  }

  update(body:any){
    return this.httpClient.put(this.eduUrl,body)

  }

  delete(){}
}
