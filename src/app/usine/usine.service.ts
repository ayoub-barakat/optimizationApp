import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USINES_URL } from '../app.constants'

@Injectable({
  providedIn: 'root'
})
export class UsineService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(USINES_URL+'.json');
  }

  addOne(usine) {
    return this.http.post(USINES_URL+'.json',usine);
  }


  updateOne(id,usine) {
    return this.http.put(USINES_URL+`/${id}.json`,usine);
  }

  deleteOne(id) {
    return this.http.delete(USINES_URL+`/${id}.json`);
  }
}
